import React from 'react'
import { Product } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
import { CopyWrapper, ImageStyles, ProductThumbnailWrapper } from './ProductThumbnail.style'
type ProductThumbnailProps = {
  product: Product
}

const ProductThumbnail = ({
  product: {
    title,
    images,
    slug: { current: productSlug },
    category: {
      slug: { current: categorySlug },
      mainCategory: {
        slug: { current: mainCategorySlug },
      },
    },
  },
}: ProductThumbnailProps) => {
  const imageData = getImageFromId(images[0].asset.id, 'fullWidth')
  const getSlug = () => `/${mainCategorySlug}/${categorySlug}/${productSlug}`
  return (
    <ProductThumbnailWrapper to={getSlug()}>
      <ImageStyles image={imageData} alt={title} />
      <CopyWrapper>
        <h5>{title}</h5>
      </CopyWrapper>
    </ProductThumbnailWrapper>
  )
}

export default ProductThumbnail
