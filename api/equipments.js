import fs from 'fs';
import path from 'path';

let equipmentsData = null;

function loadEquipments() {
    if (equipmentsData) return equipmentsData;

    const filePath = path.join(process.cwd(), 'exercisedb_data', 'equipments_api.json');
    const data = fs.readFileSync(filePath, 'utf8');
    equipmentsData = JSON.parse(data);
    return equipmentsData;
}

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('Content-Type', 'application/json');

    try {
        const apiData = loadEquipments();
        return res.status(200).json(apiData);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
