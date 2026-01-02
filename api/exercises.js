import fs from 'fs';
import path from 'path';

let exercisesData = null;

function loadExercises() {
    if (exercisesData) return exercisesData;

    try {
        const filePath = path.join(process.cwd(), 'exercisedb_data', 'all_exercises_api.json');
        const data = fs.readFileSync(filePath, 'utf8');
        exercisesData = JSON.parse(data);
        return exercisesData;
    } catch (error) {
        console.error('Error loading exercises:', error);
        return { success: false, data: [] };
    }
}

export default function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=3600');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const apiData = loadExercises();
        const exercises = apiData.data || [];

        const { offset = '0', limit = '25' } = req.query;

        const start = Math.max(0, parseInt(offset));
        const pageSize = Math.min(parseInt(limit), 100); // Max 100 per request
        const end = start + pageSize;

        const paginated = exercises.slice(start, end);

        return res.status(200).json({
            success: true,
            count: paginated.length,
            total: exercises.length,
            offset: start,
            limit: pageSize,
            data: paginated
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
