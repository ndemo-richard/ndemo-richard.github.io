
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content:[
    "./src/**/*.{js,jsx.ts.tsx}",
  ],
  theme: {
    backgroundImage:{
      'logo': "url('../public/background.jpg')",
    },
    extend: {
      colors: {
        dark: '#0a0a12', // Deep, dark blue or black
        accent: '#ff7597', // Bright pink for a touch of mystery
        neon: '#39ff14', // Neon green for highlights and accents
      },
      fontFamily: {
        mysterious: ['"Cinzel Decorative"', 'serif'], // A font that feels ancient or mystical
        body: ['"Open Sans"', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 8px rgba(255, 117, 151, 0.7)' },
          '50%': { textShadow: '0 0 20px rgba(255, 117, 151, 0.95)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

