/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screen: {
        'tablet':'640px',
        'lg-tablet':'768px',
        'laptop':'1024px',
        'desktop':'1280px',
      },
    },
  },
  plugins: [],
};
