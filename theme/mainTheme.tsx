const mainTheme = {
  colors: {
    primary: '#FFD717',
    secondary: '#204AAB',
    accent1: '#083358',
    accent2: '#001F3F',
    primaryText: '#222222',
    lightText: '#FFFFFF',
    white: '#FFFFFF',
    grey100: 'hsl(0, 0%, 90%)',
    grey002: 'hsl(0, 0%, 98%)',
    grey850: 'hsl(0, 0%, 15%)',
    black: 'hsl(0, 0%, 0%)',
  },

  fontSize: {
    xs: '1.2rem',
    s: '1.6rem',
    m: '1.8rem',
    l: '2rem',
    xl: '2.4rem',
    '2xl': '2.8rem',
    '3xl': '3.4rem',
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
    mainContentWidth: '1200px',
  },
}

export type MainThemeType = typeof mainTheme
export default mainTheme
