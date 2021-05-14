import styled, { css } from 'styled-components'

export const PaginationStyles = styled.div`
  grid-column: 2/-1;
  grid-row: 4/-1;
  gap: 2rem;

  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-column: 2 / -1;
      grid-row: 5 / span 1;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1 / span 2;
      grid-row: 5 / span 1;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-column: 1 / span 1;
      grid-row: 8 / span 1;
      grid-auto-flow: row;
      justify-content: center;
      gap: 2.4rem;
    }
  `}
`
export const PageButtonsWrapper = styled.div`
  max-width: 80vw;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-items: center;
`
