# 🚀 AlignedSafely Platform - Deployment Guide

## Quick Start (5 minutes)

### Option 1: Docker Deployment (Recommended)

```bash
# 1. Clone and navigate
cd platform

# 2. Copy environment template
cp .env.example .env

# 3. Edit .env with your credentials
nano .env

# 4. Start everything with Docker
docker-compose up -d

# 5. Check health
curl http://localhost:3000/health
```

### Option 2: Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your credentials

# 3. Set up database
# Make sure PostgreSQL is running, then:
npm run db:migrate

# 4. Start development server
npm run dev

# 5. Or build and run production
npm run build
npm start
```

---

## 📋 Prerequisites

### Required
- Node.js 18+ and npm 9+
- PostgreSQL 14+
- Stripe account (get keys at https://stripe.com)

### Optional
- Docker & Docker Compose (for containerized deployment)
- Nginx (for SSL/reverse proxy)
- AWS account (for SES email)

---

## 🔑 Environment Setup

### 1. Copy template
```bash
cp .env.example .env
```

### 2. Get Stripe Keys
1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy **Secret key** → `STRIPE_SECRET_KEY`
3. Copy **Publishable key** → `STRIPE_PUBLISHABLE_KEY`
4. Go to **Webhooks** → Add endpoint → `https://yourdomain.com/webhooks/stripe`
5. Copy **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### 3. Database
```bash
# Local PostgreSQL
DATABASE_URL=postgresql://user:password@localhost:5432/alignedsafely

# Or use a managed service:
# - Supabase: https://supabase.com
# - Neon: https://neon.tech
# - AWS RDS
# - DigitalOcean Managed Databases
```

### 4. Email Provider (Choose one)

**SendGrid** (Recommended)
```bash
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=SG.xxxxx
```

**AWS SES**
```bash
EMAIL_PROVIDER=ses
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
```

---

## 🏗️ Production Deployment Options

### Option A: Railway (Easiest)

1. **Connect Repository**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login
   railway login
   
   # Initialize
   railway init
   ```

2. **Add Database**
   - Go to Railway dashboard
   - Click "New" → "Database" → "PostgreSQL"
   - Railway auto-sets `DATABASE_URL`

3. **Set Environment Variables**
   ```bash
   railway variables set STRIPE_SECRET_KEY=sk_live_...
   railway variables set JWT_SECRET=your-secret
   railway variables set EMAIL_FROM=noreply@alignedsafely.com
   ```

4. **Deploy**
   ```bash
   railway up
   ```

5. **Get URL**
   - Railway provides: `https://your-app.up.railway.app`
   - Add custom domain in dashboard

### Option B: Vercel + Supabase

1. **Database: Supabase**
   ```bash
   # Go to https://supabase.com
   # Create project → Get connection string
   DATABASE_URL=postgresql://...supabase.co:5432/postgres
   ```

2. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Set Environment Variables**
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add all variables from `.env`

### Option C: AWS (Most Control)

1. **Database: RDS PostgreSQL**
   ```bash
   # Create RDS instance
   aws rds create-db-instance \
     --db-instance-identifier alignedsafely-db \
     --db-instance-class db.t3.small \
     --engine postgres \
     --master-username aligned \
     --master-user-password YOUR_PASSWORD
   ```

2. **Application: ECS Fargate**
   ```bash
   # Build and push Docker image
   aws ecr create-repository --repository-name alignedsafely
   docker build -t alignedsafely .
   docker tag alignedsafely:latest YOUR_ECR_URI
   docker push YOUR_ECR_URI
   
   # Deploy to ECS
   # Use AWS Console or terraform/cloudformation
   ```

3. **Load Balancer**
   - Set up ALB for SSL termination
   - Point to ECS service

### Option D: DigitalOcean App Platform

1. **Connect GitHub**
   - Go to https://cloud.digitalocean.com/apps
   - Click "Create App" → Connect GitHub repo

2. **Configure**
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`

3. **Add Database**
   - Add "Dev Database" (PostgreSQL)
   - Auto-injects `DATABASE_URL`

4. **Environment Variables**
   - Add in App → Settings → Environment

---

## 🗄️ Database Migration

### Initial Setup
```bash
# Run schema
psql $DATABASE_URL < database-schema.sql

# Or use migration script
npm run db:migrate
```

### Seed Initial Data
```bash
# Seed certification standards
npm run db:seed
```

---

## 🔒 SSL / HTTPS Setup

### Option 1: Cloudflare (Easiest)
1. Add your domain to Cloudflare
2. Point A record to your server IP
3. Enable "Full (strict)" SSL mode
4. Cloudflare handles certificates automatically

### Option 2: Let's Encrypt + Nginx
```bash
# Install certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d api.alignedsafely.com

# Auto-renewal (already set up by certbot)
```

### Option 3: Cloud Provider
- Railway, Vercel, AWS: SSL included automatically

---

## 🧪 Verification Checklist

After deployment, verify:

```bash
# 1. Health check
curl https://api.alignedsafely.com/health

# 2. API info
curl https://api.alignedsafely.com/api/v1

# 3. Test certification endpoint
curl https://api.alignedsafely.com/api/v1/certifications/CERT-2024-TEST

# 4. Check logs
# Docker: docker-compose logs -f app
# Railway: railway logs
# Vercel: vercel logs
```

---

## 📊 Monitoring & Logging

### Application Logs
```bash
# Docker
docker-compose logs -f app

# Local
tail -f logs/combined.log
```

### Error Tracking (Optional)
```bash
# Add Sentry
npm install @sentry/node
# Add SENTRY_DSN to .env
```

### Metrics (Optional)
- New Relic
- Datadog
- CloudWatch (AWS)

---

## 🔄 Updates & Maintenance

### Deploy New Version
```bash
# Docker
git pull
docker-compose build
docker-compose up -d

# Railway
git push  # Auto-deploys

# Vercel
vercel --prod
```

### Database Backup
```bash
# Manual backup
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql

# Automated (via cron)
0 2 * * * pg_dump $DATABASE_URL | gzip > backup-$(date +\%Y\%m\%d).sql.gz
```

---

## 🚨 Troubleshooting

### Database Connection Failed
```bash
# Test connection
psql $DATABASE_URL

# Check if PostgreSQL is running
docker ps | grep postgres

# Check credentials
echo $DATABASE_URL
```

### Stripe Webhooks Not Working
1. Check webhook URL is publicly accessible
2. Verify webhook secret matches
3. Check Stripe dashboard → Webhooks → Events
4. Test with Stripe CLI:
   ```bash
   stripe listen --forward-to localhost:3000/webhooks/stripe
   ```

### Port Already in Use
```bash
# Find process using port 3000
lsof -ti:3000

# Kill it
kill -9 $(lsof -ti:3000)

# Or change PORT in .env
PORT=3001
```

---

## 📞 Support

- **Documentation**: https://docs.alignedsafely.com
- **GitHub Issues**: https://github.com/alignedsafely/platform/issues
- **Email**: [email protected]

---

## 🎉 Next Steps After Deployment

1. **Set up Stripe Products**
   - Create subscription plans in Stripe Dashboard
   - Update `STRIPE_PRICE_ID` in code

2. **Create First Auditor Account**
   - Use admin panel or API
   - Verify credentials

3. **Add Certification Standards**
   - Run seed script or add via API

4. **Test Full Flow**
   - Create company account
   - Submit audit request
   - Match with auditor
   - Complete certification

5. **Marketing Setup**
   - Add badge widget to docs
   - Set up public registry page
   - Configure email templates

---

**🚀 Platform is ready for production!**
