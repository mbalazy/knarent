const mainTheme = {
  colors: {
    primary: "#FFD717",
    secondary: "#0D63A5",
    accent1: "#083358",
    accent2: "#001F3F",
    primaryText: "#222222",
    lightText: "#FFFFFF",
    grey100: "hsl(0, 0%, 90%)",
    grey850: "hsl(0, 0%, 15%)",
    black: "hsl(0, 0%, 0%)",
  },

  fontSize: {
    xs: "1.2rem",
    s: "1.6rem",
    m: "1.8rem",
    l: "2rem",
    xl: "2.4rem",
    xxl: "2.8rem",
    heading: "3.4rem",
  },

  fontWeight: {
    light: 300,
    regular: 400,
    bold: 600,
    extrabold: 900,
  },

  dimensions: {
    navbarHeight: "70px",
    footerHeight: "80px",
  },
};

export type MainThemeType = typeof mainTheme;
export default mainTheme;
