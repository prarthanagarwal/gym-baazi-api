export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json({
        status: 'ok',
        service: 'GymBaazi API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        endpoints: {
            exercises: '/api/exercises',
            muscles: '/api/muscles',
            bodyparts: '/api/bodyparts',
            equipments: '/api/equipments'
        }
    });
}
