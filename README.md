# GymBaazi API - Public Repository

🏋️ **Free, open-source exercise database API** with 1,324 exercises, GIFs, and comprehensive metadata.

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

## 🚀 Live API

- **Base URL**: `https://gymbaazi.app/api`
- **Documentation**: [https://gymbaazi.app/docs](https://gymbaazi.app/docs)
- **Landing Page**: [https://gymbaazi.app](https://gymbaazi.app)

## 📊 Stats

- **1,324 Exercises** with animated GIFs
- **81 Muscle Groups** cataloged
- **10 Body Parts** categorized  
- **54 Equipment Types** listed
- **9 REST API Endpoints**
- **0ms Cache Hit** (Cloudflare CDN)
- **∞ Rate Limit** (unlimited requests)

## ⚡ Quick Start

```bash
# Get all exercises (paginated)
curl https://gymbaazi.app/api/exercises?limit=5

# Get specific exercise
curl https://gymbaazi.app/api/exercises/VPPtusI

# Filter by muscle
curl https://gymbaazi.app/api/exercises/muscle/biceps

# Get all muscles
curl https://gymbaazi.app/api/muscles
```

## 🔧 API Endpoints

Full interactive documentation: **[gymbaazi.app/docs](https://gymbaazi.app/docs)**

## 📜 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. See the [LICENSE](LICENSE) file for the full text.

### Source Attribution
- Exercise data and media sourced from [ExerciseDB](https://github.com/ExerciseDB/exercisedb-api) (AGPL-3.0).
- This project is a production-ready fork and redistribution of the ExerciseDB dataset.

**Note**: 176 exercises from the original dataset could not be downloaded (404 errors from source). This represents ~12% of the original 1,500 exercises. The remaining 1,324 exercises provide comprehensive coverage.

---

Made with ❤️ for the fitness community
