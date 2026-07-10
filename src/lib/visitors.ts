import { Pool } from 'pg'

export interface VisitorData {
  uniqueVisitors: number
}

let pool: Pool | null = null

function getPool(): Pool | null {
  if (!pool) {
    const url = process.env.DATABASE_URL
    if (!url) return null
    pool = new Pool({
      connectionString: url,
      max: 1,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      ssl: { rejectUnauthorized: false },
    })
    pool.on('error', (err) => {
      console.error('Unexpected pool error:', err)
    })
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

export async function initVisitorTable(): Promise<void> {
  const p = getPool()
  if (!p) return
  const client = await p.connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS visitors (
        id SERIAL PRIMARY KEY,
        visitor_id TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
  } finally {
    client.release()
  }
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  try {
    const p = getPool()
    if (!p) return { uniqueVisitors: 0 }

    const client = await p.connect()
    try {
      await client.query(
        'INSERT INTO visitors (visitor_id) VALUES ($1) ON CONFLICT (visitor_id) DO NOTHING',
        [visitorId]
      )

      const result = await client.query('SELECT COUNT(*)::text as count FROM visitors')
      const uniqueCount = parseInt(result.rows[0]?.count || '0', 10)

      return { uniqueVisitors: uniqueCount }
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return { uniqueVisitors: 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const p = getPool()
    if (!p) return { uniqueVisitors: 0 }

    const client = await p.connect()
    try {
      const result = await client.query('SELECT COUNT(*)::text as count FROM visitors')
      const uniqueCount = parseInt(result.rows[0]?.count || '0', 10)
      return { uniqueVisitors: uniqueCount }
    } finally {
      client.release()
    }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    return { uniqueVisitors: 0 }
  }
}
