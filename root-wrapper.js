import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme/mainTheme'
import GlobalStyle from './theme/globalStyle'
require('@fontsource/montserrat')
require('@fontsource/work-sans')
export const wrapPageElement = ({ element }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </>
)
