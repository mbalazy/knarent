import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  display: grid;
  align-items: center;
  gap: 6rem;

  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: 0 5%;
  text-align: center;
`
export const Subheading = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      margin: 0 6%;
    }
  `}
`

export const ChildrenWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
`
