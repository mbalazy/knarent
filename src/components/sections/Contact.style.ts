import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

export const ContactWrapper = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);

  & > article {
    ${cardBasicStyle}
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
export const MapStyles = styled.article`
  grid-row: 1/-1;
  grid-column: 2/-1;
  overflow: hidden;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
      grid-row: 3 / -1;
    }
  `}
`
export const AderesStyles = styled.article`
  padding: 3rem;
  grid-row: 1 / span 2;
  grid-column: 1/1;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
      grid-row: 1 / span 1;
    }
  `}
`
export const WorkingHoursStyles = styled.article`
  padding: 3rem;
  grid-row: 3 / span 2;
  grid-column: 1/1;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
      grid-row: 2 / span 1;
    }
  `}
`
