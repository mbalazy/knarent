import styled, { css } from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

type ImageOverlayProps = {
  lighten?: boolean
}
export const ImageOverlayWrapper = styled.div<ImageOverlayProps>`
  position: absolute;
  width: 100%;
  height: 100%;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.84);

    ${({ lighten }) =>
      lighten &&
      css`
        background: rgba(0, 0, 0, 0.7);
      `}
  }
`

export const FullImageStyles = styled(GatsbyImage)`
  height: 100%;
`
