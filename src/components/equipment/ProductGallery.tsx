import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Product as ProductType } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
import styled from 'styled-components'

type ProductGalleryProps = {
  sanityImagesData: ProductType['images']
  productTitle: string
}
const ProductGalleryWrapper = styled.div`
  flex: 2;
  padding: 2rem;

  display: flex;
  gap: 1rem;
  justify-content: center;
`
const BigImageStyles = styled.div`
  flex: 0 1 300px;
`
const SmallerImagesStyles = styled.div`
  flex: 0 1 70px;
`

const ProductGallery = ({ sanityImagesData, productTitle }: ProductGalleryProps) => {
  const allImages = sanityImagesData.map((img) => getImageFromId(img.asset.id))
  const [images, setImages] = useState(allImages)
  const [firstImage, ...restImages] = images
  return (
    <ProductGalleryWrapper>
      <BigImageStyles>
        <GatsbyImage image={firstImage} alt={productTitle} />
      </BigImageStyles>
      <SmallerImagesStyles>
        {restImages.map((img) => (
          <GatsbyImage image={img} alt={productTitle} key={img.images.fallback.src} />
        ))}
      </SmallerImagesStyles>
    </ProductGalleryWrapper>
  )
}

export default ProductGallery
