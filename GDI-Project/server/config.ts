import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envConfig = fs.readFileSync(envPath, 'utf8')
        .split('\n')
        .filter(line => line.trim() !== '' && !line.startsWith('#'))
        .map(line => {
          const [key, ...valueParts] = line.split('=');
          const value = valueParts.join('=');
          return { key: key.trim(), value: value.trim() };
        });

      envConfig.forEach(({ key, value }) => {
        if (!process.env[key]) {
          process.env[key] = value;
        }
      });
    }
  } catch (error) {
    console.warn('Error loading .env file:', error);
  }
}

// Configuration object
export const config = {
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || '',
  isProduction: process.env.NODE_ENV === 'production',
};

// Validate required environment variables
export function validateConfig() {
  const requiredVars = ['DATABASE_URL'];
  const missing = requiredVars.filter(name => !process.env[name]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}