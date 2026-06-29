import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export default function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=60, stale-while-revalidate=600');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const filePath = path.join(process.cwd(), 'exercisedb_data', 'all_exercises_api.json');
        const stats = fs.statSync(filePath);
        const fileContent = fs.readFileSync(filePath);
        
        // Generate MD5 hash as the version string
        const hash = crypto.createHash('md5').update(fileContent).digest('hex');
        const exercisesCount = JSON.parse(fileContent).data.length;

        return res.status(200).json({
            success: true,
            version: hash,
            lastModified: stats.mtime.toISOString(),
            totalExercises: exercisesCount
        });
    } catch (error) {
        console.error('Error fetching version:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
