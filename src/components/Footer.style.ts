import styled, { css } from 'styled-components'

export const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FooterInnerWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      display: grid;
      justify-items: start;
      justify-content: center;
      gap: 4rem;
    }
  `}
`
export const FooterContentStyles = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 1.4rem;
`
