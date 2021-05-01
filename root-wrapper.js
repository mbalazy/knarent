import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme/mainTheme'
import GlobalStyle from './theme/globalStyle'
import Navbar from './src/components/Navbar'
import Footer from './src/components/Footer'
import { MenuProvider } from './src/components/menu/MobileMenuContext'
import '@fontsource/work-sans'
import '@fontsource/montserrat'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey002};
  gap: ${({ theme }) => theme.dimensions.mainContentGap};
  padding-bottom: ${({ theme }) => theme.dimensions.mainContentGap};
  min-height: 100vh;
`

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MenuProvider>
      <GlobalStyle />
      <Navbar sticky />
      <PageWrapper>{element}</PageWrapper>
      <Footer />
    </MenuProvider>
  </ThemeProvider>
)
