import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Product as ProductType } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
import styled from 'styled-components'

type ProductGalleryProps = {
  images: ProductType['images']
  productTitle: string
}
const ImagesStyles = styled.div`
  flex: 1;
  padding: 9rem;
`

const ProductGallery = ({ images, productTitle }: ProductGalleryProps) => {
  const sampleOnePhoto = getImageFromId(images[0].asset.id)
  return (
    <ImagesStyles>
      <GatsbyImage image={sampleOnePhoto} alt={productTitle} />
    </ImagesStyles>
  )
}

export default ProductGallery
