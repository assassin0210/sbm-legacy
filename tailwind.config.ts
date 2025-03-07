import scrollbar from 'tailwind-scrollbar'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */

export const colors = {
  'sbm-orange-10': '#fbc247',
  'sbm-orange-15': '#f6b128',
  'sbm-orange-25': '#f87a03',
  'sbm-orange-30': '#de9015',
  'sbm-black': '#000',
  'sbm-black-10': '#333',
  'sbm-black-20': '#666',
  'sbm-white-10': '#eee',
  'sbm-white-20': '#f9f9f9',
  'sbm-blue-10': '#00a0ff',
  'sbm-blue-20': '#3e6d9a',
  'sbm-blue-30': '#3b6498',
  'sbm-blue-40': '#23527c',
  'sbm-error': '#e73737',
  //
  'sbm-white': '#fff',
  'sbm-secondary': '#F87A01',
  'sbm-orange-20': '#ec7301',
  'sbm-primary': '#34B0F8',
  'sbm-primary-10': '#5EABD5',
  'sbm-neutral': '#333333',
  'sbm-neutral-100': '#999999',
  'sbm-neutral-200': '#EBEBEB',
  'sbm-neutral-300': '#5F6D7D',
  'sbm-neutral-800': '#f6f8f9',
  'sbm-neutral-900': '#f9fafb',
  'sbm-green': '#5DB85B',
  'sbm-green-10': '#3a7539',
} as const

export type IColors = keyof typeof colors
export type TextThemeColorKeys = `text-${IColors}`

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'Arial, sans-serif'],
    },
    extend: {
      boxShadow: {
        buttonShadow: '0px 0px 25px 2px rgba(207,207,207,0.5)',
        header: '0px 0px 25px 4px rgba(207,207,207,0.2)',
        focusInput:
          'inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, 0.6)',
      },
      zIndex: {},
      backgroundColor: {
        semiWhite:
          'linear-gradient(to bottom, #f6f6f6 0%, #ffffff 40%, #ffffff 100%)',
      },
      backgroundImage: {
        schoolbussManager: "url('../assets/images/schoolbus-manager.jpg')",
      },
      keyframes: {
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        loader: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        loader: 'loader 1200ms linear infinite',

        slideDown: 'slideDown 200ms ',
        slideUp: 'slideUp 200ms ',
      },
      colors: colors,
      screens: {
        mobile: '375px',
        maxMobile: { max: '767px' },
        mobileRange: { min: '375px', max: '767px' },

        tablet: '768px',
        maxTablet: { max: '991px' },
        tabletRange: { min: '768px', max: '991px' },

        laptop: '992px',
        maxLaptop: { max: '1199px' },
        laptopRange: { min: '992px', max: '1199px' },

        desktop: '1200px',
        maxDesktop: { max: '1539px' },

        extraDesktop: '1540px',
      },
    },
  },
  // 1600
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@xpd/tailwind-3dtransforms'),
    plugin(function ({ addVariant, addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen mobileRange': {
            maxWidth: '100%',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@screen tabletRange': {
            maxWidth: '750px',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@screen laptopRange': {
            maxWidth: '970px',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@screen desktop': {
            maxWidth: '1570px',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        },
      })

      addComponents({
        '.container-v2': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen mobileRange': {
            maxWidth: '100%',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@screen tabletRange': {
            maxWidth: '750px',
            paddingLeft: '16px',
            paddingRight: '16px',
          },
          '@screen laptopRange': {
            maxWidth: '970px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@screen desktop': {
            maxWidth: '1070px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      })

      addVariant('loading', '&[data-loading="true"]')
      addVariant('error', '&[data-error="true"]')
      addVariant('dataChecked', '&[data-state="checked"]')
      addVariant('sideicon', '&[data-sideicon="true"]')
    }),
    scrollbar,
  ],
}
export default config
