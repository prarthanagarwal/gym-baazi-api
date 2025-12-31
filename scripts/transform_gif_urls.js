#!/usr/bin/env node

/**
 * Transform exercise data to use self-hosted GIF URLs
 * Changes: https://static.exercisedb.dev/media/[id].gif 
 * To: https://gymbaazi.app/gifs/[id].gif
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://gymbaazi.app';
const EXERCISES_FILE = path.join(__dirname, 'exercisedb_data', 'all_exercises_api.json');

console.log('🔄 Transforming GIF URLs to self-hosted paths...');

// Read the wrapped API format
const data = JSON.parse(fs.readFileSync(EXERCISES_FILE, 'utf8'));

let transformedCount = 0;

// Transform each exercise's gifUrl
data.data = data.data.map(exercise => {
  const originalUrl = exercise.gifUrl;
  
  // Extract filename from original URL
  // https://static.exercisedb.dev/media/VPPtusI.gif -> VPPtusI.gif
  const filename = originalUrl.split('/').pop();
  
  // Create new self-hosted URL
  exercise.gifUrl = `${DOMAIN}/gifs/${filename}`;
  
  transformedCount++;
  return exercise;
});

// Write back to file
fs.writeFileSync(EXERCISES_FILE, JSON.stringify(data, null, 2));

console.log(`✅ Transformed ${transformedCount} GIF URLs`);
console.log(`📝 Updated file: ${EXERCISES_FILE}`);
console.log(`🌐 New URL pattern: ${DOMAIN}/gifs/[id].gif`);
