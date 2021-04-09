import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/mainTheme'
import GlobalStyle from './theme/globalStyle'
import '@fontsource/montserrat'
import '@fontsource/work-sans'

export const wrapPageElement = ({ element }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </>
)
