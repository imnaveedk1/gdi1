#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build frontend and backend
echo "Building application..."
npm run build

# Run database migrations if in production
if [ "$NODE_ENV" = "production" ]; then
  echo "Running database migrations..."
  npm run db:push
fi

echo "Build completed successfully!"