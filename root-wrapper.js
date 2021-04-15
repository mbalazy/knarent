import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/mainTheme'
import GlobalStyle from './theme/globalStyle'
import Navbar from './src/components/Navbar'
import Footer from './src/components/Footer'
require('@fontsource/montserrat')
require('@fontsource/work-sans')

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar sticky />
    {element}
    <Footer />
  </ThemeProvider>
)
