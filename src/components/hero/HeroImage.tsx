import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import { ImageOverlayWrapper, FullImageStyles } from '../shared/ImageOverlay'

type HeroContentProps = {
  children: JSX.Element
}

const HeroContentWrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  width: 100%;
`

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
