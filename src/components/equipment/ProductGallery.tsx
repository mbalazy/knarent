import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { css } from 'styled-components'
import { Product as ProductType } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'

type ProductGalleryProps = {
  sanityImagesData: ProductType['images']
  productTitle: string
}
const ProductGalleryWrapper = styled.div`
  width: 100%;
  height: 54rem;
  padding: ${({ theme }) => theme.dimensions.equipmentGap};

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      width: 70%;
      height: auto;
      padding: 0;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 90%;
    }
  `}
`
const BigImageStyles = styled.div`
  margin-top: auto;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      margin-bottom: 2rem;
    }
  `}
`
const SmallerImagesStyles = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  margin-top: auto;

  & > * {
    flex: 0 1 8rem;
  }
`

const ProductGallery = ({ sanityImagesData, productTitle }: ProductGalleryProps) => {
  const allImages = sanityImagesData.map((img) => getImageFromId(img.asset.id))
  const [bigImage, setBigImage] = useState(allImages[0])

  return (
    <ProductGalleryWrapper>
      <BigImageStyles>
        <GatsbyImage image={bigImage} alt={productTitle} />
      </BigImageStyles>
      <SmallerImagesStyles>
        {allImages.map((img) => (
          <GatsbyImage
            image={img}
            alt={productTitle}
            key={img.images.fallback.src}
            onClick={() => setBigImage(img)}
          />
        ))}
      </SmallerImagesStyles>
    </ProductGalleryWrapper>
  )
}

export default ProductGallery
