import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { useHeroImage } from '../../graphql/useHeroImage'
import { FullImageStyles, ImageOverlayWrapper } from '../shared/ImageOverlay'
import { HeroContentWrapper } from './HeroImage.style'

type HeroContentProps = {
  children: JSX.Element
}

const HeroImage = ({ children }: HeroContentProps) => {
  const image = getImage(useHeroImage())

  return (
    <HeroContentWrapper>
      <ImageOverlayWrapper>
        <FullImageStyles image={image} alt="background" />
      </ImageOverlayWrapper>
      <>{children}</>
    </HeroContentWrapper>
  )
}

export default HeroImage
