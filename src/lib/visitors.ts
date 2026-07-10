import { neon } from '@neondatabase/serverless'

export interface VisitorData {
  uniqueVisitors: number
}

type SqlTag = ReturnType<typeof neon>
let sql: SqlTag | null = null

function getSql(): SqlTag | null {
  if (!sql) {
    const url = process.env.DATABASE_URL
    if (!url) return null
    try {
      sql = neon(url)
    } catch (e) {
      console.error('Failed to initialize Neon connection:', e)
      return null
    }
  }
  return sql
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
  const db = getSql()
  if (!db) return
  await db`
    CREATE TABLE IF NOT EXISTS visitors (
      id SERIAL PRIMARY KEY,
      visitor_id TEXT UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `
}

export async function trackVisit(visitorId: string): Promise<VisitorData> {
  try {
    const db = getSql()
    if (!db) return { uniqueVisitors: 0 }

    await initVisitorTable()

    await db`
      INSERT INTO visitors (visitor_id)
      VALUES (${visitorId})
      ON CONFLICT (visitor_id) DO NOTHING
    `

    type CountRow = { count: string }
    const result = await db`SELECT COUNT(*) as count FROM visitors` as CountRow[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)

    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error tracking visitor:', error)
    return { uniqueVisitors: 0 }
  }
}

export async function getVisitorStats(): Promise<{ uniqueVisitors: number }> {
  try {
    const db = getSql()
    if (!db) return { uniqueVisitors: 0 }

    type CountRow = { count: string }
    const result = await db`SELECT COUNT(*) as count FROM visitors` as CountRow[]
    const uniqueCount = parseInt(result[0]?.count || '0', 10)
    return { uniqueVisitors: uniqueCount }
  } catch (error) {
    console.error('Error getting visitor stats:', error)
    return { uniqueVisitors: 0 }
  }
}
