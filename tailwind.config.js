/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'windows-bg': "url('./assets/images/windows-bg.jpg')"
      }
    }
  },
  plugins: []
}
