import fs from 'fs';
import path from 'path';
import Fuse from 'fuse.js';

let exercisesData = null;
let fuseIndex = null;

// Fuse.js configuration optimized for exercise names
const fuseOptions = {
    // Search in these fields with different weights
    keys: [
        { name: 'name', weight: 0.5 },           // Exercise name is most important
        { name: 'targetMuscles', weight: 0.2 },   // Target muscles
        { name: 'bodyParts', weight: 0.15 },      // Body parts
        { name: 'equipments', weight: 0.1 },      // Equipment used
        { name: 'secondaryMuscles', weight: 0.05 } // Secondary muscles
    ],
    // Fuzzy matching settings
    threshold: 0.4,      // 0.0 = exact match, 1.0 = match anything (0.4 is balanced)
    distance: 100,       // How far to search for fuzzy matches within the string
    minMatchCharLength: 2, // Minimum characters before matching starts
    includeScore: true,  // Include match score for debugging/sorting
    ignoreLocation: true, // Search anywhere in the string, not just the beginning
    useExtendedSearch: false, // Keep it simple
    findAllMatches: true // Find all possible matches
};

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

function getFuseIndex(exercises) {
    if (fuseIndex) return fuseIndex;

    // Create the Fuse index once and cache it
    fuseIndex = new Fuse(exercises, fuseOptions);
    return fuseIndex;
}

export default function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('CDN-Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const apiData = loadExercises();
        const exercises = apiData.data || [];

        const { offset = '0', limit = '25', search, sortBy, sortOrder } = req.query;

        const start = Math.max(0, parseInt(offset));
        const pageSize = Math.min(parseInt(limit), 100); // Max 100 per request

        let results = exercises;
        let searchQuery = null;

        // Apply fuzzy search if search parameter is provided
        if (search && search.trim().length > 0) {
            searchQuery = search.trim();
            const fuse = getFuseIndex(exercises);
            const searchResults = fuse.search(searchQuery);

            // Extract items from Fuse results (they come as { item, score, refIndex })
            results = searchResults.map(result => result.item);
        }

        const total = results.length;
        const end = start + pageSize;
        const paginated = results.slice(start, end);

        // Build response with metadata
        const response = {
            success: true,
            count: paginated.length,
            total: total,
            offset: start,
            limit: pageSize,
            data: paginated,
            metadata: {
                totalExercises: total,
                totalPages: Math.ceil(total / pageSize),
                currentPage: Math.floor(start / pageSize) + 1,
                previousPage: start > 0 ? Math.floor((start - pageSize) / pageSize) + 1 : null,
                nextPage: end < total ? Math.floor(end / pageSize) + 1 : null
            }
        };

        // Include search info if a search was performed
        if (searchQuery) {
            response.searchQuery = searchQuery;
        }

        return res.status(200).json(response);
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}
