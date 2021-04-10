import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

type HeroContentProps = {
  children: JSX.Element
}

const HeroContentWrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  width: 100%;
`
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const ImageStyles = styled(GatsbyImage)`
  height: 100%;
`

const HeroImage = ({ children }: HeroContentProps) => {
  const { imageFile } = useStaticQuery(graphql`
    query HeroImage {
      imageFile: file(relativePath: { eq: "hero-2-bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 80, width: 1800)
        }
      }
    }
  `)
  const image = getImage(imageFile)

  return (
    <HeroContentWrapper>
      <ImageWrapper>
        <ImageStyles image={image} alt="background" />
      </ImageWrapper>
      <>{children}</>
    </HeroContentWrapper>
  )
}

export default HeroImage
