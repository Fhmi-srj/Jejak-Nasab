#!/bin/bash

# ============================================
# Jejak Nasab — Deploy Script for cPanel
# ============================================
# Usage: bash deploy.sh
# 
# Frontend sudah di-build lokal dan public/build
# sudah ada di git, jadi tidak perlu Node.js di server.
# ============================================

set -e

echo "🚀 Starting deployment..."
echo "========================="

# 1. Pull latest code from git
echo ""
echo "📥 Pulling latest code..."
git pull origin main

# 2. Install/update Composer dependencies (production)
echo ""
echo "📦 Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

# 3. Run database migrations
echo ""
echo "🗄️  Running database migrations..."
php artisan migrate --force

# 4. Clear all caches
echo ""
echo "🧹 Clearing caches..."
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear

# 5. Re-cache for production performance
echo ""
echo "⚡ Caching for production..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 6. Optimize
echo ""
echo "🔧 Optimizing..."
php artisan optimize

# 7. Storage link (first time only, safe to re-run)
echo ""
echo "🔗 Ensuring storage link..."
php artisan storage:link 2>/dev/null || true

echo ""
echo "========================="
echo "✅ Deployment complete!"
echo "========================="
