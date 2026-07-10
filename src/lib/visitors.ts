import { Pool } from 'pg'

export interface VisitorData {
  uniqueVisitors: number
}

let pool: Pool | null = null

function getPool(): Pool | null {
  if (!pool) {
    const raw = process.env.DATABASE_URL
    if (!raw) return null
    const url = raw.replace(/[?&]channel_binding=[^&]+/g, '').replace(/&$/, '')
    pool = new Pool({
      connectionString: url,
      max: 1,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    })
    pool.on('error', () => {})
  }
  return pool
}

export function generateVisitorId(ip: string | null, userAgent: string | null, fingerprint?: string): string {
  if (fingerprint) {
    return `fp:${fingerprint}`
  }

  const ipPart = ip || 'unknown'
  const uaPart = userAgent || 'unknown'
  return Buffer.from(`${ipPart}-${uaPart}`).toString('base64').slice(0, 32)
}

async function query(text: string, params?: (string | number | boolean | null)[]) {
  const p = getPool()
  if (!p) return null
  const client = await p.connect()
  try {
    return await client.query(text, params)
  } finally {
    client.release()
  }
}

export async function trackVisit(visitorId: string): Promise<VisitorData & { _debug?: Record<string, unknown> }> {
  try {
    await query(`CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      visitor_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`)

    await query(
      'INSERT INTO visitors (visitor_id) VALUES ($1) ON CONFLICT (visitor_id) DO NOTHING',
      [visitorId]
    )

    const result = await query('SELECT COUNT(*)::text as count FROM visitors')
    const uniqueCount = parseInt(result?.rows[0]?.count || '0', 10)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Error tracking visitor:', msg)
    return {
      uniqueVisitors: 0,
      _debug: {
        databaseUrlSet: !!process.env.DATABASE_URL,
        error: msg,
      },
    }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number; _debug?: Record<string, unknown> }> {
  try {
    const result = await query('SELECT COUNT(*)::text as count FROM visitors')
    const uniqueCount = parseInt(result?.rows[0]?.count || '0', 10)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error)
    console.error('Error getting visitor stats:', msg)
    return {
      uniqueVisitors: 0,
      _debug: {
        databaseUrlSet: !!process.env.DATABASE_URL,
        error: msg,
      },
    }
  }
}
