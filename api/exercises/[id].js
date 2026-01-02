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
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=3600');
    res.setHeader('Content-Type', 'application/json');

    const { id } = req.query;

    if (!id) {
        return res.status(400).json({
            success: false,
            error: 'ID parameter required'
        });
    }

    try {
        const apiData = loadExercises();
        const exercises = apiData.data || [];
        const exercise = exercises.find(e => e.exerciseId === id);

        if (!exercise) {
            return res.status(404).json({
                success: false,
                error: 'Exercise not found'
            });
        }

        return res.status(200).json({
            success: true,
            data: exercise
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
