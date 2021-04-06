import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme/mainTheme";
import GlobalStyle from "./theme/globalStyle";

export const wrapRootElement = ({ element }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </>
);
