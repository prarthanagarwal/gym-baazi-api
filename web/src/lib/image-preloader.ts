// Background worker for lazy loading images
// Uses requestIdleCallback to load images without blocking the main thread

const imageCache = new Map<string, string>();

// Preload an image in the background
function preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (imageCache.has(src)) {
            resolve();
            return;
        }

        const img = new Image();
        img.onload = () => {
            imageCache.set(src, src);
            resolve();
        };
        img.onerror = reject;
        img.src = src;
    });
}

// Schedule image preloading during idle time
export function scheduleImagePreload(sources: string[]): void {
    if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback((deadline: IdleDeadline) => {
            let i = 0;
            while (deadline.timeRemaining() > 0 && i < sources.length) {
                preloadImage(sources[i]);
                i++;
            }
            // Schedule remaining images
            if (i < sources.length) {
                scheduleImagePreload(sources.slice(i));
            }
        });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
            sources.forEach(src => preloadImage(src));
        }, 200);
    }
}

// Hook to preload carousel images after component mounts
export function useImagePreloader(sources: string[]): void {
    if (typeof window !== 'undefined') {
        // Wait for initial paint before preloading
        requestAnimationFrame(() => {
            scheduleImagePreload(sources);
        });
    }
}

export { imageCache };
