import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  display: grid;
  align-items: center;
  gap: 6rem;

  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 5%;
  text-align: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      h3 {
        margin: 0 6%;
      
    }
  `}
`
export const ChildrenWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
`
