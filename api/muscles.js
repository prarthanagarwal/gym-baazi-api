import fs from 'fs';
import path from 'path';

let musclesData = null;

function loadMuscles() {
    if (musclesData) return musclesData;

    const filePath = path.join(process.cwd(), 'exercisedb_data', 'muscles_api.json');
    const data = fs.readFileSync(filePath, 'utf8');
    musclesData = JSON.parse(data);
    return musclesData;
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('CDN-Cache-Control', 'public, max-age=31536000');
    res.setHeader('Content-Type', 'application/json');

    try {
        const apiData = loadMuscles();
        return res.status(200).json(apiData);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
