module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    extend: {
      // https://cruip.com/creating-a-sliding-text-animation-with-tailwind-css/
      animation: {
        // @keyframes | duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
        'text-slide-up-2': 'text-slide-up-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-3': 'text-slide-up-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-4': 'text-slide-up-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-5': 'text-slide-up-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-6': 'text-slide-up-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-7': 'text-slide-up-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-up-8': 'text-slide-up-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',

        'wipe-in-from-left-100': 'wipe-in-from-left 0.7s ease-out 0.1s forwards',
        'wipe-in-from-left-200': 'wipe-in-from-left 0.7s ease-out 0.2s forwards',
        'wipe-in-from-left-300': 'wipe-in-from-left 0.7s ease-out 0.3s forwards',
        'wipe-in-from-left-500': 'wipe-in-from-left 0.7s ease-out 0.5s forwards',
        'wipe-in-from-left-700': 'wipe-in-from-left 0.7s ease-out 0.7s forwards',
        'wipe-in-from-left-1000': 'wipe-in-from-left 0.7s ease-out 1s forwards',
        'wipe-in-from-left-1200': 'wipe-in-from-left 0.7s ease-out 1.2s forwards',
        'wipe-in-from-left-1500': 'wipe-in-from-left 0.7s ease-out 1.5s forwards',
        'wipe-in-from-left-2000': 'wipe-in-from-left 0.7s ease-out 2s forwards',

        'wipe-in-from-bottom-100': 'wipe-in-from-bottom 0.7s ease-out 0.1s forwards',
        'wipe-in-from-bottom-200': 'wipe-in-from-bottom 0.7s ease-out 0.2s forwards',
        'wipe-in-from-bottom-300': 'wipe-in-from-bottom 0.7s ease-out 0.3s forwards',
        'wipe-in-from-bottom-500': 'wipe-in-from-bottom 0.7s ease-out 0.5s forwards',
        'wipe-in-from-bottom-700': 'wipe-in-from-bottom 0.7s ease-out 0.7s forwards',
        'wipe-in-from-bottom-1000': 'wipe-in-from-bottom 0.7s ease-out 1s forwards',
        'wipe-in-from-bottom-1200': 'wipe-in-from-bottom 0.7s ease-out 1.2s forwards',
        'wipe-in-from-bottom-1500': 'wipe-in-from-bottom 0.7s ease-out 1.5s forwards',
        'wipe-in-from-bottom-2000': 'wipe-in-from-bottom 0.7s ease-out 2s forwards',
      },
      keyframes: {
        'text-slide-up-2': {
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-66.66%)',
          },
        },
        'text-slide-up-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
        'text-slide-up-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-20%)',
          },
          '50%, 70%': {
            transform: 'translateY(-40%)',
          },
          '75%, 95%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
        'text-slide-up-5': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
        'text-slide-up-6': {
          '0%, 13.33%': {
            transform: 'translateY(0%)',
          },
          '16.66%, 30%': {
            transform: 'translateY(-14.28%)',
          },
          '33.33%, 46.66%': {
            transform: 'translateY(-28.57%)',
          },
          '50%, 63.33%': {
            transform: 'translateY(-42.85%)',
          },
          '66.66%, 80%': {
            transform: 'translateY(-57.14%)',
          },
          '83.33%, 96.66%': {
            transform: 'translateY(-71.42%)',
          },
          '100%': {
            transform: 'translateY(-85.71%)',
          },
        },
        'text-slide-up-7': {
          '0%, 11.43%': {
            transform: 'translateY(0%)',
          },
          '14.28%, 25.71%': {
            transform: 'translateY(-12.5%)',
          },
          '28.57%, 40%': {
            transform: 'translateY(-25%)',
          },
          '42.85%, 54.28%': {
            transform: 'translateY(-37.5%)',
          },
          '57.14%, 68.57%': {
            transform: 'translateY(-50%)',
          },
          '71.42%, 82.85%': {
            transform: 'translateY(-62.5%)',
          },
          '85.71%, 97.14%': {
            transform: 'translateY(-75%)',
          },
          '100%': {
            transform: 'translateY(-87.5%)',
          },
        },
        'text-slide-up-8': {
          '0%, 10%': {
            transform: 'translateY(0%)',
          },
          '12.5%, 22.5%': {
            transform: 'translateY(-11.11%)',
          },
          '25%, 35%': {
            transform: 'translateY(-22.22%)',
          },
          '37.5%, 47.5%': {
            transform: 'translateY(-33.33%)',
          },
          '50%, 60%': {
            transform: 'translateY(-44.44%)',
          },
          '62.5%, 72.5%': {
            transform: 'translateY(-55.55%)',
          },
          '75%, 85%': {
            transform: 'translateY(-66.66%)',
          },
          '87.5%, 97.5%': {
            transform: 'translateY(-77.77%)',
          },
          '100%': {
            transform: 'translateY(-88.88%)',
          },
        },
        'wipe-in-from-left': {
          from: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          }
        },
        'wipe-in-from-bottom': {
          from: {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0)',
            opacity: 1,
          }
        }
      },
      colors: {
        accent: '#3b82f6'
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif']
      },
    }
  },
  variants: {},
  plugins: [],
}
