const mainTheme = {
  colors: {
    primary: '#FFD717' as const,
    secondary: '#204AAB' as const,
    accent1: '#083358' as const,
    accent2: '#001F3F' as const,
    accent3: '#0F358C' as const,
    primaryText: '#222222' as const,
    lightText: '#FFFFFF' as const,
    white: '#FFFFFF' as const,
    grey100: 'hsl(0, 0%, 90%)' as const,
    grey002: 'hsl(0, 0%, 98%)' as const,
    grey005: 'hsl(0, 0%, 95%)' as const,
    grey850: 'hsl(0, 0%, 15%)' as const,
    black: 'hsl(0, 0%, 0%)' as const,
  },

  fontSize: {
    xs: '1.2rem' as const,
    s: '1.5rem' as const,
    m: '1.6rem' as const,
    l: '1.8rem' as const,
    xl: '2.2rem' as const,
    '2xl': '2.4rem' as const,
    '3xl': '3rem' as const,
  },

  fontWeight: {
    light: 300 as const,
    regular: 400 as const,
    bold: 600 as const,
    extrabold: 900 as const,
  },

  border: {
    standard: '20px' as const,
    light: '15px' as const,
  },

  dimensions: {
    navbarHeight: '70px' as const,
    mainContentWidth: '1100px' as const,
    mainContentGap: '12rem' as const,
    equipmentMargin: '6rem' as const,
    equipmentGap: '4rem' as const,
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
    l: '900px' as const,
    m: '767px' as const,
    s: '450px' as const,
  },
}

export type MainThemeType = typeof mainTheme
export default mainTheme
