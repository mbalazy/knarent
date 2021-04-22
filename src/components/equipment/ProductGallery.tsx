import React, { useState } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Product as ProductType } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
import styled from 'styled-components'

type ProductGalleryProps = {
  sanityImagesData: ProductType['images']
  productTitle: string
}
const ProductGalleryWrapper = styled.div`
  flex: 1;
  height: 90%;
  padding: ${({ theme }) => theme.dimensions.equipmentGap};

  display: flex;
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
  justify-content: center;
`
const BigImageStyles = styled.div`
  flex: 0 1 320px;
  align-self: center;
`
const SmallerImagesStyles = styled.div`
  flex: 0 1 70px;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const ProductGallery = ({ sanityImagesData, productTitle }: ProductGalleryProps) => {
  const allImages = sanityImagesData.map((img) => getImageFromId(img.asset.id))
  const [images, setImages] = useState(allImages)

  /* First image will be display as a big image, rest of images will be shown as smaller ones
   * swapToBeFirst() will change the order
   */
  const [firstImage, ...restImages] = images
  const swapToBeFirst = (img: IGatsbyImageData) =>
    setImages([img, ...images.filter((i) => i.images.fallback.src !== img.images.fallback.src)])
  return (
    <ProductGalleryWrapper>
      <BigImageStyles>
        <GatsbyImage image={firstImage} alt={productTitle} />
      </BigImageStyles>
      <SmallerImagesStyles>
        {restImages.map((img) => (
          <GatsbyImage
            image={img}
            alt={productTitle}
            key={img.images.fallback.src}
            onClick={() => swapToBeFirst(img)}
          />
        ))}
      </SmallerImagesStyles>
    </ProductGalleryWrapper>
  )
}

export default ProductGallery
