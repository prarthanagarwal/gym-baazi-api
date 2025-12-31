#!/bin/bash

# Script to download all exercise GIFs for self-hosting
# This script extracts GIF URLs from the exercises JSON and downloads them

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
EXERCISES_FILE="$SCRIPT_DIR/exercisedb_data/all_exercises.json"
GIFS_DIR="$SCRIPT_DIR/gifs"

# Create gifs directory
mkdir -p "$GIFS_DIR"

echo "🚀 Starting GIF download process..."
echo "📂 Downloading to: $GIFS_DIR"

# Extract all GIF URLs and download them
# The JSON is an array of exercises, each with a gifUrl field
jq -r '.[].gifUrl' "$EXERCISES_FILE" | while read -r url; do
    # Extract filename from URL (e.g., VPPtusI.gif from https://static.exercisedb.dev/media/VPPtusI.gif)
    filename=$(basename "$url")
    output_path="$GIFS_DIR/$filename"
    
    # Skip if already downloaded
    if [ -f "$output_path" ]; then
        echo "⏭️  Skipping $filename (already exists)"
        continue
    fi
    
    echo "⬇️  Downloading $filename..."
    
    # Download with retry logic
    curl -f -L --retry 3 --retry-delay 2 -o "$output_path" "$url" || {
        echo "❌ Failed to download $filename"
        continue
    }
    
    # Small delay to be respectful to the server
    sleep 0.1
done

# Count downloaded files
gif_count=$(find "$GIFS_DIR" -name "*.gif" | wc -l | tr -d ' ')
echo ""
echo "✅ Download complete!"
echo "📊 Total GIFs: $gif_count"
echo "📁 Location: $GIFS_DIR"

# Calculate total size
total_size=$(du -sh "$GIFS_DIR" | cut -f1)
echo "💾 Total size: $total_size"
