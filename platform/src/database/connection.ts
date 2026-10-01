/**
 * Database connection pool
 */

import { Pool } from 'pg';
import { createLogger } from '../utils/logger';

const logger = createLogger('Database');

let pool: Pool;

export async function initDatabase(): Promise<void> {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    min: parseInt(process.env.DATABASE_POOL_MIN || '2'),
    max: parseInt(process.env.DATABASE_POOL_MAX || '10'),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

  // Test connection
  try {
    const client = await pool.connect();
    logger.info('Database connection test successful');
    client.release();
  } catch (error) {
    logger.error('Database connection failed:', error);
    throw error;
  }
}

export function getPool(): Pool {
  if (!pool) {
    throw new Error('Database not initialized. Call initDatabase() first.');
  }
  return pool;
}

export async function query(text: string, params?: any[]) {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  logger.debug('Executed query', { text, duration, rows: res.rowCount });
  return res;
}
