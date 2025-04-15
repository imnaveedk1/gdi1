import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";
import { config, validateConfig } from './config';

// Validate that all required environment variables are present
validateConfig();

const { Pool } = pg;

// Create a PostgreSQL pool with SSL configuration for Render
export const pool = new Pool({ 
  connectionString: config.databaseUrl,
  ssl: config.isProduction ? {
    rejectUnauthorized: false // Required for Render PostgreSQL
  } : undefined
});

// Test database connection
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Create drizzle instance
export const db = drizzle(pool, { schema });
