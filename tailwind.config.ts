import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors:{
        standardBlue:"#0F52BA"
      },
      boxShadow: {
        'mk-shadow': '0 -2px 8px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
