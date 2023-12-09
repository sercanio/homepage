/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  content: ['./pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        '3xs': '360px',
        // => @media (min-width: 3600px) { ... }

        '2xs': '480px',
        // => @media (min-width: 480px) { ... }

        xs: '576px',
        // => @media (min-width: 576px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          dark: 'var(--color-text-dark)'
        }
      },
      backgroundColor: {
        skin: {
          // default theme
          base: 'var(--color-bg-base)',
          baseFooter: 'var(--color-bg-base-footer)',
          baseCard: 'var(--color-bg-base-card)',
          baseCardHover: 'var(--color-bg-base-card-hover)',
          baseTag: 'var(--color-bg-base-tag)',
          baseSideBarItemHover: 'var(--color-bg-base-sidebar-item-hover)',

          // dark theme
          dark: 'var(--color-bg-dark)',
          darkFooter: 'var(--color-bg-dark-footer)',
          darkCard: 'var(--color-bg-dark-card)',
          darkCardHover: 'var(--color-bg-dark-card-hover)',
          darkTag: 'var(--color-bg-dark-tag)',
          darkSideBarItemHover: 'var(--color-bg-dark-sidebar-item-hover)',
          secondary: 'var(--color-bg-secondary)'
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-border-base)',
          dark: 'var(--color-border-dark)'
        }
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      animation: {
        scale: 'scale .5s ease-in-out forwards'
      },
      transitionProperty: {
        background: 'background-color'
      }
    },
    plugins: [],
    mode: 'jit'
  }
}
