import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { cardBasicStyle, cardHoverEffect } from '../../../theme/globalStyle'

export const ProductThumbnailWrapper = styled(Link)`
  overflow-y: hidden;
  ${cardBasicStyle}
  ${cardHoverEffect}
  text-decoration: inherit;
  color: inherit;

  display: flex;
  flex-direction: column;
`
export const ImageStyles = styled(GatsbyImage)`
  flex: 1 0 200px;
  margin: 2rem;
`
export const CopyWrapper = styled.div`
  flex: 1 1 60px;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
`
