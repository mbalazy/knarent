import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import { FullImageStyles, ImageOverlayWrapper } from '../shared/ImageOverlay'
import { HeroContentWrapper } from './HeroImage.style'

type HeroContentProps = {
  children: JSX.Element
}

const HeroImage = ({ children }: HeroContentProps) => {
  const { imageFile } = useStaticQuery(graphql`
    query HeroImage {
      imageFile: file(relativePath: { eq: "hero-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 80, width: 1800)
        }
      }
    }
  `)
  const image = getImage(imageFile)

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
