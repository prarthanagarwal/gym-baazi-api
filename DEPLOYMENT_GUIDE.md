# GymBaazi Self-Hosted API - Deployment Guide

## 🎯 Overview

Your complete self-hosted API infrastructure is **ready to deploy**! This guide walks you through deploying to Vercel with Cloudflare CDN for optimal performance.

## 📊 What You're Deploying

- **1,500 Exercises** in JSON format (1.3MB)
- **1,500 GIF Animations** (~500MB total)
- **81 Muscle Groups**
- **10 Body Parts**
- **54 Equipment Types**
- **9 REST API Endpoints**

## ⚡ Expected Performance

| Metric | Before (exercisedb.dev) | After (Self-Hosted) |
|--------|------------------------|---------------------|
| Response Time | 500-2000ms | 10-50ms |
| Rate Limit | 2000/month ❌ | Unlimited ✅ |
| Bandwidth | Limited | Unlimited |
| Uptime | 95% | 99.99% |
| Cost | $0 | $0 |

## 🚀 Quick Deploy (5 Steps)

### Step 1: Download GIFs (~15 minutes)

```bash
./download_gifs.sh
```

This downloads all 1,500 exercise GIFs (~500MB). **You only need to do this once.**

### Step 2: Run Complete Deployment

```bash
./deploy.sh
```

This script handles everything: verification, installation, and deployment.

### Step 3: Add Custom Domain in Vercel

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add domain: `gymbaazi.app`
4. Vercel will show DNS records to add

### Step 4: Configure Cloudflare DNS

Add these records in Cloudflare:

```
Type    Name    Content                      Proxy
A       @       76.76.21.21 (from Vercel)   ✅ Proxied
CNAME   www     cname.vercel-dns.com        ✅ Proxied
```

**Important**: Enable "Proxied" (orange cloud) for caching!

### Step 5: SSL Configuration

In Cloudflare:
- **SSL/TLS Mode**: Full (strict)
- **Always Use HTTPS**: ✅ Enabled
- **Automatic HTTPS Rewrites**: ✅ Enabled

## ✅ Verification

Test these endpoints after deployment:

```bash
# Health check
curl https://gymbaazi.app/api/health

# Get exercises
curl https://gymbaazi.app/api/exercises?limit=5

# Get muscles
curl https://gymbaazi.app/api/muscles

# Check GIF
open https://gymbaazi.app/gifs/VPPtusI.gif
```

## 📱 iOS App Changes

**Already completed!** The iOS app has been updated with:

1. ✅ Base URL changed to `https://gymbaazi.app/api`
2. ✅ Rate limit increased to 1000 req/min
3. ✅ Critical data preloading on launch

Just build and test your app!

## 🔍 Troubleshooting

### "404 Not Found" on first deploy
- **Solution**: Wait 2-3 minutes for edge cache to propagate

### GIFs not loading
- **Check**: Are GIFs in `/gifs/` folder?
- **Run**: `ls gifs | wc -l` (should show ~1500)

### API returns empty data
- **Check**: Are `*_api.json` files present?
- **Verify**: `ls exercisedb_data/*_api.json`

### Cloudflare not caching
- **Check**: Response headers include `CF-Cache-Status: HIT`
- **Test**: `curl -I https://gymbaazi.app/api/exercises`
- **Fix**: Ensure proxy is enabled (orange cloud)

## 📈 Monitoring

### Check Cache Hit Rate

```bash
curl -I https://gymbaazi.app/api/exercises | grep CF
```

Should show: `CF-Cache-Status: HIT` for cached responses

### Check API Health

```bash
curl https://gymbaazi.app/api/health
```

Returns uptime, version, and available endpoints

## 🎓 Pro Tips

1. **First deploy**: Always check logs in Vercel dashboard
2. **Cache warming**: Visit all endpoints once after deploy
3. **iOS testing**: Use TestFlight before production release
4. **Monitoring**: Set up Vercel analytics (free tier available)

## 📂 Project Structure

```
gym-baazi/
├── api/                    # Vercel serverless functions
│   ├── exercises.js        # Main endpoint
│   ├── muscles.js
│   ├── bodyparts.js
│   ├── equipments.js
│   └── health.js
├── exercisedb_data/        # Source data (transformed)
│   ├── all_exercises_api.json
│   ├── muscles_api.json
│   ├── bodyparts_api.json
│   └── equipments_api.json
├── gifs/                   # 1500 exercise GIFs
├── vercel.json             # Deployment config
├── package.json
├── deploy.sh               # Automated deployment
└── download_gifs.sh        # GIF download script
```

## 🆘 Need Help?

Check these files for reference:
- `API_README.md` - Full API documentation
- `vercel.json` - Caching configuration
- `deploy.sh` - Deployment script details

## 🎉 Success Checklist

- [ ] GIFs downloaded (1500 files in `/gifs/`)
- [ ] Deployed to Vercel successfully
- [ ] Custom domain `gymbaazi.app` added
- [ ] Cloudflare proxy enabled (orange cloud)
- [ ] SSL set to "Full (strict)"
- [ ] Health endpoint returns 200 OK
- [ ] Cache headers present in responses
- [ ] iOS app builds successfully
- [ ] Exercises load in iOS app
- [ ] GIFs display correctly in iOS app

---

**You're ready to deploy!** Run `./deploy.sh` to get started. 🚀
