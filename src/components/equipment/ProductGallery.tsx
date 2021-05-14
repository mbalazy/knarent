import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Product as ProductType } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
import { BigImageStyles, ProductGalleryWrapper, SmallerImagesStyles } from './ProductGallery.style'

type ProductGalleryProps = {
  sanityImagesData: ProductType['images']
  productTitle: string
}

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
