/** @type {import('tailwindcss').Config} */
module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          primary: 'var(--color-text-primary)',
          tilde: 'var(--color-tilde)',
          caret: 'var(--color-caret)'
        }
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          console: 'var(--color-bg-console)'
        }
      },
      borderColor: {
        skin: {
          base: 'var(--color-border)'
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
        slideFromLeft: {
          '0%': { transform: 'translateX(-4%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideFromRight: {
          '0%': { transform: 'translateX(-4%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideFromBottom: {
          '0%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        cursorBlink: 'cursorBlink 1.3s linear infinite',
        slideFromRight: 'slideFromRight .5s steps(60, end) .1s 1 normal both',
        slideFromLeft: 'slideFromLeft .5s steps(60, end) .1s 1 reverse both',
        slideFromBottom: 'slideFromBottom .5s steps(60, end) .1s 1 normal'
      }
    }
  },
  plugins: [],
  mode: 'jit'
}
