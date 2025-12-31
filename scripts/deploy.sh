#!/bin/bash

# Complete deployment script for GymBaazi Self-Hosted API
# This script handles the entire deployment process

set -e

echo "🚀 GymBaazi API Deployment Script"
echo "=================================="
echo ""

# Step 1: Download GIFs
echo "📥 Step 1/5: Downloading exercise GIFs..."
if [ -d "gifs" ] && [ "$(ls -A gifs 2>/dev/null | wc -l)" -gt "1400" ]; then
    echo "  ✅ GIFs already downloaded ($(ls -A gifs | wc -l) files found)"
else
    echo "  ⏳ This will take 10-15 minutes (1,500 GIFs, ~500MB)"
    read -p "  Continue? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        ./download_gifs.sh
    else
        echo "  ⚠️  Skipping GIF download. Deploy will fail without GIFs!"
    fi
fi
echo ""

# Step 2: Verify data files
echo "📋 Step 2/5: Verifying API data files..."
required_files=(
    "exercisedb_data/all_exercises_api.json"
    "exercisedb_data/muscles_api.json"
    "exercisedb_data/bodyparts_api.json"
    "exercisedb_data/equipments_api.json"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ Missing: $file"
        exit 1
    fi
done
echo ""

# Step 3: Install Vercel CLI
echo "🔧 Step 3/5: Checking Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "  ⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "  ✅ Vercel CLI installed"
fi
echo ""

# Step 4: Deploy to Vercel
echo "🌐 Step 4/5: Deploying to Vercel..."
echo "  This will open your browser for authentication if needed."
read -p "  Ready to deploy? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel --prod
    echo "  ✅ Deployed successfully!"
else
    echo "  ⚠️  Deployment skipped"
    exit 0
fi
echo ""

# Step 5: Post-deployment instructions
echo "✅ Deployment Complete!"
echo "======================"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Configure Custom Domain:"
echo "   • Go to your Vercel dashboard"
echo "   • Add domain: gymbaazi.app"
echo "   • Add DNS records shown by Vercel"
echo ""
echo "2. Enable Cloudflare:"
echo "   • Add gymbaazi.app to Cloudflare"
echo "   • Enable proxy (orange cloud) for @ and www"
echo "   • SSL/TLS mode: Full (strict)"
echo ""
echo "3. Test API:"
echo "   • Health: https://gymbaazi.app/api/health"
echo "   • Exercises: https://gymbaazi.app/api/exercises?limit=5"
echo "   • GIF: https://gymbaazi.app/gifs/[id].gif"
echo ""
echo "4. Update iOS App:"
echo "   • Base URL already updated to: https://gymbaazi.app/api"
echo "   • Build and test the app"
echo "   • Deploy to TestFlight if all tests pass"
echo ""
echo "🎉 You're all set!"
