/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色彩主题
        warmIvory: '#FFF8F4',      // 温暖象牙白
        dustyRose: '#F4E5E1',      // 尘玉红
        sageGreen: '#C7D3BF',      // 鼠尾草绿
        softMauve: '#E6D7E7',      // 柔和紫丁香
        deepBrown: '#5A4A42',      // 深棕
        neutralBrown: '#6B5750',   // 中性棕
        lightBrown: '#8D7B74',     // 浅棕
        darkDustyRose: '#A57F75',  // 深尘玉红
        blueGray: '#6B8E9F',       // 蓝灰
      },
      fontFamily: {
        'noto-serif': ['Noto Serif SC', 'serif'],
        'noto-sans': ['Noto Sans SC', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.8' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'xs': ['0.75rem', { lineHeight: '1.6' }],
      },
      boxShadow: {
        'card': '0 4px 12px rgba(90, 74, 66, 0.08)',
        'card-hover': '0 8px 25px rgba(90, 74, 66, 0.15)',
      },
      borderRadius: {
        'card': '12px',
      },
      animation: {
        'spectrum-flow': 'spectrum-flow 4s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'spectrum-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}