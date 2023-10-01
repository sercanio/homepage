/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
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
      }
    },
    plugins: [],
    mode: 'jit'
  }
}
