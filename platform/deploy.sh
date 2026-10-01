#!/bin/bash

# AlignedSafely Platform Deployment Script
set -e

echo "🚀 AlignedSafely Platform Deployment"
echo "===================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check environment
if [ -z "$NODE_ENV" ]; then
    echo -e "${YELLOW}Warning: NODE_ENV not set. Defaulting to 'production'${NC}"
    export NODE_ENV=production
fi

# Check required environment variables
required_vars=("DATABASE_URL" "STRIPE_SECRET_KEY" "JWT_SECRET")
missing_vars=()

for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        missing_vars+=("$var")
    fi
done

if [ ${#missing_vars[@]} -ne 0 ]; then
    echo -e "${RED}Error: Missing required environment variables:${NC}"
    for var in "${missing_vars[@]}"; do
        echo "  - $var"
    done
    echo ""
    echo "Please set them in your .env file or environment"
    exit 1
fi

echo -e "${GREEN}✓ Environment variables validated${NC}"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm ci --only=production

# Build application
echo ""
echo "🔨 Building application..."
npm run build

# Run database migrations
echo ""
echo "🗄️  Running database migrations..."
npm run db:migrate

# Run health check
echo ""
echo "🏥 Running health check..."
node dist/scripts/health-check.js || {
    echo -e "${RED}Health check failed. Please check your configuration.${NC}"
    exit 1
}

echo ""
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Start the server: npm start"
echo "  2. Or use Docker: docker-compose up -d"
echo "  3. Visit: http://localhost:3000/health"
echo ""
