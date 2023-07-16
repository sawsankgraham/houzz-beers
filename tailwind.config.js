/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        yellow: {
          0: "#D39A2A"
        },
        blue: {
          0: "#2B65BD",
          25: "#F3F8FD",
          50: "#FAFAFA",
          75: "#004789",
          100: "#346DC0"
        },
        gray: {
          75: "#797979"
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
