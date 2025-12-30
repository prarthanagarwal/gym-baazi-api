/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                // Light Mode
                light: {
                    background: '#F4EED9', // Warm Vanilla
                    secondary: '#E6DDC4',  // Pale Beige
                    text: '#4A4238',       // Warm Charcoal
                    textSecondary: 'rgba(74, 66, 56, 0.6)',
                },
                // Dark Mode
                dark: {
                    background: '#33221A', // Deep Espresso
                    secondary: '#55443B',  // Dark Mocha
                    text: '#F4EED9',       // Cream
                    textSecondary: 'rgba(244, 238, 217, 0.6)',
                },
                // Shared
                accent: {
                    DEFAULT: '#FF8C00', // Tangerine
                    hover: '#E67E00',
                },
                status: {
                    success: '#28A745',
                    destructive: '#DC3545',
                }
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            }
        },
    },
    plugins: [],
}
