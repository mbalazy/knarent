import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../theme/globalStyle'

export const ProductWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  width: 90vw;
  display: grid;
  grid-template-columns: 100%;
  gap: ${({ theme }) => theme.dimensions.equipmentMargin};
  margin-top: 8rem;
`
export const ProductMainInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
  section {
    ${cardBasicStyle}
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-template-rows: 1fr auto;
    }
  `}
`
export const ProductMainInfo = styled.section`
  grid-column: 2/-1;
  grid-row: 1 / span 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  position: relative;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: 1fr;
      grid-column: 2/-1;
      padding: 2rem;
      gap: 4rem;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
      position: static;
      padding: 2rem 2rem 3rem;
    }
  `}
`
export const ProductDetails = styled.div`
  display: grid;
  text-align: center;
  gap: 4rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      gap: 2rem;
    }
  `}
`
export const PhoneStyles = styled.div`
  padding: 2rem;
  margin: 0 4.2rem;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent3};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: ${({ theme }) => theme.border.light};
  font-weight: 600;
  * {
    fill: white;
  }
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      padding: 2rem 3rem;
      margin: 0;
    }
  `}
`
export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 4.2rem;
  padding: 1rem 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: ${({ theme }) => theme.border.standard};
  border: none;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 1rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      top: 9rem;
      left: auto;
      right: 3rem;
      padding: 0.6rem 1.6rem;
      z-index: 2;
    }
  `}
`
export const ProductDescription = styled.section`
  padding: 3rem 4rem;
  grid-column: 2/-1;
  grid-row: -2 / span 1;
  max-height: 22rem;
  overflow-y: auto;

  position: relative;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      max-height: 44rem;
      grid-column: 1/-1;
      grid-row: 3 / span 1;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      max-height: initial;
    }
  `}
`
