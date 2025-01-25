/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        input: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      animation: {
        pulse: 'pulse 1.5s ease-in-out infinite',
        in: 'fadeIn 0.2s ease-out',
        out: 'fadeOut 0.2s ease-in',
        spin: 'spin 1s linear infinite',
      },
      transitionDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        1000: '1s',
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      keyframes: {
        pulse: {
          '0%': {opacity: '0.5'},
          '50%': {opacity: '1'},
          '100%': {opacity: '0.5'},
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        fadeOut: {
          '0%': {opacity: 1},
          '100%': {opacity: 0},
        },
        spin: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
      screens: {
        xxs: '300px',
        xs: '375px',
        mobile: '475px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1440px',
      },
      zIndex: {
        99999: 99999,
      },
      fontSize: {
        // Extra Small
        xs: ['0.625rem', {lineHeight: '0.9375rem'}], // 10px / 15px
        // Small
        sm: ['0.75rem', {lineHeight: '1.125rem'}], // 12px / 18px
        // Medium
        md: ['0.875rem', {lineHeight: '1.375rem'}], // 14px / 22px
        // Large (base size)
        lg: ['1rem', {lineHeight: '1.5rem'}], // 16px / 24px
        // Extra Large
        xl: ['1.125rem', {lineHeight: '1.6875rem'}], // 18px / 27px
        // 2X Large
        '2xl': ['1.25rem', {lineHeight: '1.625rem'}], // 20px / 26px
        // 3X Large
        '3xl': ['1.375rem', {lineHeight: '1.8125rem'}], // 22px / 29px
        // 4X Large
        '4xl': ['1.5rem', {lineHeight: '2rem'}], // 24px / 32px
        // 5X Large
        '5xl': ['1.75rem', {lineHeight: '2.25rem'}], // 28px / 36px
        // 6X Large
        '6xl': ['2rem', {lineHeight: '2.625rem'}], // 32px / 42px
        // 7X Large
        '7xl': ['2.25rem', {lineHeight: '2.875rem'}], // 36px / 46px
        // 8X Large
        '8xl': ['3rem', {lineHeight: '3.4375rem'}], // 48px / 55px
        // 9X Large
        '9xl': ['4.0625rem', {lineHeight: '5rem'}], // 65px / 80px
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        customBlue: '#E9F1FE',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gray: {
          DEFAULT: 'hsl(var(--gray))',
          foreground: 'hsl(var(--gray-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
  },

  plugins: [
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1216px',
          },
        },
        '.hero-padding': {
          paddingTop: '4rem',
          paddingBottom: '4rem',
          '@screen lg': {
            paddingTop: '7rem',
            paddingBottom: '7rem',
          },
          '@screen sm': {
            paddingTop: '5rem',
            paddingBottom: '5rem',
          },
        },
        '.section-padding': {
          paddingTop: '3rem',
          paddingBottom: '3rem',
          '@screen lg': {
            paddingTop: '5rem',
            paddingBottom: '5rem',
          },
          '@screen sm': {
            paddingTop: '4rem',
            paddingBottom: '4rem',
          },
        },
        '.section-top-padding': {
          paddingTop: '3rem',

          '@screen lg': {
            paddingTop: '5rem',
          },
          '@screen sm': {
            paddingTop: '4rem',
          },
        },
        '.section-bottom-padding': {
          paddingBottom: '3rem',
          '@screen sm': {
            paddingBottom: '4rem',
          },
          '@screen lg': {
            paddingBottom: '5rem',
          },
        },
      });
    },
    function ({addUtilities}) {
      addUtilities({
        '.img-full': {
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        },
        '.img-fluid': {
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center',
        },
      });
    },
  ],
};
