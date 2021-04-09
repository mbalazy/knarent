import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './mainTheme'
import GlobalStyle from './globalStyle'

export const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
)
