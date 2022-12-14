/** @type {import('tailwindcss').Config} */
module.exports = {
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
          tilde: 'var(--color-tilde)'
        }
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          secondary: 'var(--color-bg-secondary)',
          border: 'var(--color-bg-border)'
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
        }
      },
      animation: {
        cursorBlink: 'cursorBlink 1.3s linear infinite'
      }
    }
  },
  plugins: []
}
