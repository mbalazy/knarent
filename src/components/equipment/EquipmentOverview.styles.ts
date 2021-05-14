import styled, { css } from 'styled-components'
import { cardBasicStyle, centerInsideMe } from '../../../theme/globalStyle'

export const EquipmentOverviewWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: ${({ theme }) => theme.dimensions.equipmentMargin};

  display: grid;
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 7rem repeat(2, 30rem) 6rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 7rem repeat(auto-fill, 36rem);
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 7rem repeat(auto-fit, 36rem);

      max-width: 85vw;
      margin: 3rem 0;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-template-columns: 1fr;
    }
  `}
`
export const CategoryMenuStyles = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-row: 1 / 6;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      display: none;
    }
  `}
`
export const EquipmentHeadingWrapper = styled.div`
  ${cardBasicStyle}
  ${centerInsideMe}
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};
  grid-column: 2/-1;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
    }
  `}
`
