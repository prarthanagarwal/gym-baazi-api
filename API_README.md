# GymBaazi Self-Hosted API

Production-ready API for GymBaazi iOS app, deployed on Vercel with Cloudflare CDN.

## 🚀 Quick Deploy

```bash
# 1. Download all exercise GIFs (one-time, ~500MB)
./download_gifs.sh

# 2. Deploy to Vercel
vercel --prod

# 3. Configure custom domain in Vercel dashboard
# Add: gymbaazi.app -> Point to Vercel

# 4. Update iOS app baseURL to:
# https://gymbaazi.app/api
```

## 📁 Project Structure

```
gym-baazi-api/
├── api/
│   ├── exercises.js           # GET /api/exercises
│   ├── exercises/
│   │   ├── [id].js           # GET /api/exercises/[id]
│   │   ├── equipment/
│   │   │   └── [equipment].js # GET /api/exercises/equipment/[name]
│   │   ├── body/
│   │   │   └── [body].js     # GET /api/exercises/body/[name]
│   │   └── muscle/
│   │       └── [muscle].js   # GET /api/exercises/muscle/[name]
│   ├── muscles.js            # GET /api/muscles
│   ├── bodyparts.js          # GET /api/bodyparts
│   ├── equipments.js         # GET /api/equipments
│   └── health.js             # GET /api/health
├── public/
│   ├── all_exercises_api.json
│   ├── muscles_api.json
│   ├── bodyparts_api.json
│   ├── equipments_api.json
│   └── gifs/
│       ├── VPPtusI.gif
│       └── ... (1500 GIFs)
├── vercel.json
├── package.json
└── README.md
```

## 🌐 API Endpoints

### Exercises
- `GET /api/exercises?offset=0&limit=25` - Get paginated exercises
- `GET /api/exercises/[id]` - Get single exercise by ID
- `GET /api/exercises/equipment/barbell` - Filter by equipment
- `GET /api/exercises/body/chest` - Filter by body part
- `GET /api/exercises/muscle/biceps` - Filter by muscle

### Metadata
- `GET /api/muscles` - All muscle groups
- `GET /api/bodyparts` - All body parts
- `GET /api/equipments` - All equipment types

### Health
- `GET /api/health` - API health check

### GIFs
- `GET /gifs/[id].gif` - Exercise animation GIF

## ⚡ Performance

| Metric | Value |
|--------|-------|
| API Response (cached) | 10-50ms |
| API Response (first) | 50-200ms |
| GIF Load | 50-200ms |
| Bandwidth | Unlimited |
| Rate Limit | None |
| Uptime SLA | 99.99% |

## 🔧 Local Development

```bash
npm install
vercel dev
```

Visit http://localhost:3000/api/health

## 📦 Data Format

All responses follow this structure:

```json
{
  "success": true,
  "count": 25,
  "total": 1500,
  "offset": 0,
  "limit": 25,
  "data": [...]
}
```

## 🛡️ Caching

- **Cloudflare Edge**: Caches all responses for 1 year
- **Browser**: Immutable content, permanent cache
- **Cache-Control**: `public, max-age=31536000, immutable`

## 📊 Data Statistics

- **Exercises**: 1,500
- **Muscles**: 81
- **Body Parts**: 10
- **Equipment Types**: 54
- **GIFs**: 1,500 (~500MB total)
- **JSON Data**: ~2MB total

## 🔐 Security

- No authentication required (public data)
- CORS enabled for all origins
- Rate limiting handled by Cloudflare
- DDoS protection via Cloudflare

## 📝 License

MIT
