import fs from 'fs';
import path from 'path';

let exercisesData = null;

function loadExercises() {
    if (exercisesData) return exercisesData;

    const filePath = path.join(process.cwd(), 'exercisedb_data', 'all_exercises_api.json');
    const data = fs.readFileSync(filePath, 'utf8');
    exercisesData = JSON.parse(data);
    return exercisesData;
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('Content-Type', 'application/json');

    const { muscle, offset = '0', limit = '25' } = req.query;

    if (!muscle) {
        return res.status(400).json({
            success: false,
            error: 'Muscle parameter required'
        });
    }

    try {
        const apiData = loadExercises();
        const exercises = apiData.data || [];

        const filtered = exercises.filter(e =>
            e.targetMuscles.some(m =>
                m.toLowerCase() === muscle.toLowerCase()
            ) ||
            e.secondaryMuscles.some(m =>
                m.toLowerCase() === muscle.toLowerCase()
            )
        );

        const start = parseInt(offset);
        const pageSize = Math.min(parseInt(limit), 100);
        const end = start + pageSize;
        const paginated = filtered.slice(start, end);

        return res.status(200).json({
            success: true,
            count: paginated.length,
            total: filtered.length,
            offset: start,
            limit: pageSize,
            muscle: muscle,
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
