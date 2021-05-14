import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { cardBasicStyle, cardHoverEffect } from '../../../theme/globalStyle'

export const CategoryThumbnailWrapper = styled(Link)`
  ${cardBasicStyle}
  ${cardHoverEffect}
  overflow: hidden;
  position: relative;

  border-radius: ${({ theme }) => theme.border.standard};
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      height: 36rem;
    }
  `}
`
export const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.lightText};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      h3 {
        font-size: 2.2rem;
      }
    }
  `}
`
