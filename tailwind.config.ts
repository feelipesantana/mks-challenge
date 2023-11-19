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
        standardBlue:"#0F52BA",
        gray:{
          100:"#EEEEEE",
          500:"#373737",
          600:"#2C2C2C",
        }
      },
      boxShadow: {
        'mk-shadow': '0 2px 8px 0 rgba(0,0,0,0.1352)',
      
      }
    },
  },
  plugins: [],
}
export default config
