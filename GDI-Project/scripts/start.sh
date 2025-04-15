#!/bin/bash

# Exit on error
set -e

# Check if the database exists and run migrations if needed
echo "Checking database connection..."
npm run db:push

# Start the server
echo "Starting server..."
NODE_ENV=production node dist/index.js