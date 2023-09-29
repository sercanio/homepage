/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'media',
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
      caretColor: {
        skin: {
          base: 'var(--color-caret)'
        }
      },
      keyframes: {
        cursorBlink: {
          '0%, 5%, 10%, 15%, 85%, 90%, 95%, 100%': { opacity: 1 },
          '20%, 30%, 40%, 50%, 60%, 70%, 80%': { opacity: 0 }
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        marquee: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        scale: {
          '0%': { transform: 'scale(1), rotate(5deg)' },
          '50%': { transform: 'scale(1.1) rotate(0)' },
          '100%': { transform: 'scale(1) rotate(-5deg)' }
        }
      },
      animation: {
        cursorBlink: 'cursorBlink 1.3s linear infinite',
        marquee: 'marquee 50s linear infinite',
        scale: 'scale 1s ease-in-out forwards'
      }
    },
    plugins: [],
    mode: 'jit'
  }
}
