/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      fontFamily: {
        sans: ['Hind'],
        serif: ['Lora'],
        display: ['Teko']
      },
      colors: {
        primary: {
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          DEFAULT: 'var(--color-primary)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)'
        },
        secondary: {
          '100': 'var(--color-secondary-100)',
          '200': 'var(--color-secondary-200)',
          '300': 'var(--color-secondary-300)',
          '400': 'var(--color-secondary-400)',
          DEFAULT: 'var(--color-secondary)',
          '600': 'var(--color-secondary-600)',
          '700': 'var(--color-secondary-700)',
          '800': 'var(--color-secondary-800)',
          '900': 'var(--color-secondary-900)'
        },
        accent: {
          'light': 'var(--color-accent-light)',
          DEFAULT: 'var(--color-accent)',
          'dark': 'var(--color-accent-dark)',
        },
        dark: {
          DEFAULT: 'var(--color-primary-900)',
        }
      },
      screens: {
        xs: '480px',
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        xl: '1440px',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    }
  }
}
