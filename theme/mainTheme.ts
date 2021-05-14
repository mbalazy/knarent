const mainTheme = {
  colors: {
    primary: '#FFD717',
    secondary: '#204AAB',
    accent1: '#083358',
    accent2: '#001F3F',
    accent3: '#0F358C',
    primaryText: '#222222',
    lightText: '#FFFFFF',
    white: '#FFFFFF',
    grey100: 'hsl(0, 0%, 90%)',
    grey002: 'hsl(0, 0%, 98%)',
    grey005: 'hsl(0, 0%, 95%)',
    grey850: 'hsl(0, 0%, 15%)',
    black: 'hsl(0, 0%, 0%)',
  },

  fontSize: {
    xs: '1.2rem',
    s: '1.5rem',
    m: '1.6rem',
    l: '1.8rem',
    xl: '2.2rem',
    '2xl': '2.4rem',
    '3xl': '3rem',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    extrabold: 900,
  },

  border: {
    standard: '20px',
    light: '15px',
  },

  dimensions: {
    navbarHeight: '70px',
    mainContentWidth: '1100px',
    mainContentGap: '10rem',
    equipmentMargin: '6rem',
    equipmentGap: '4rem',
  },

  up: (breakpoint: string, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 1px))`,
  down: (breakpoint: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
  between: (breakpointMin: string, breakpointMax: string, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${
      vertical ? 'height' : 'width'
    }: calc(${breakpointMin} + 1px))`,

  breakpoints: {
    l: '900px',
    m: '767px',
    s: '450px',
  },
} as const

export type MainThemeType = typeof mainTheme
export default mainTheme
