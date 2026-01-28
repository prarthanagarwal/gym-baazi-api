#!/bin/bash

# Convert carousel PNG images to WebP format
# Usage: ./convert-images.sh

set -e

CAROUSEL_DIR="web/public/gym-baazi-app-store"
LOGO_PATH="web/public/logo.png"

echo "🖼️  Converting carousel images to WebP..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Installing via Homebrew..."
    brew install webp
fi

# Convert carousel images
for png in "$CAROUSEL_DIR"/*.png; do
    if [ -f "$png" ]; then
        filename=$(basename "$png" .png)
        output="$CAROUSEL_DIR/$filename.webp"
        echo "  Converting: $filename.png → $filename.webp"
        cwebp -q 85 "$png" -o "$output"
    fi
done

# Convert logo
if [ -f "$LOGO_PATH" ]; then
    echo "  Converting: logo.png → logo.webp"
    cwebp -q 85 "$LOGO_PATH" -o "web/public/logo.webp"
fi

echo ""
echo "✅ Conversion complete!"
echo ""
echo "📊 Size comparison:"
echo "Before (PNG):"
du -sh "$CAROUSEL_DIR"/*.png 2>/dev/null | head -5
echo ""
echo "After (WebP):"
du -sh "$CAROUSEL_DIR"/*.webp 2>/dev/null | head -5
