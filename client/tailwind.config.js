/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Green & Gold Palette
        primary: "#064E3B",    // Deep Forest Green
        secondary: "#022C22",  // Dark Emerald Green
        accent: "#D4AF37",     // Metallic Gold
        goldLight: "#F3E5AB",  // Soft Champagne Gold
        cream: "#FDFBF7",      // Premium Bone White Background
        spice: "#B45309",      // Warm Spice Amber for highlights
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(6, 78, 59, 0.15)',
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.3)',
      },
      backgroundImage: {
        'gold-gradient': "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 20s infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
