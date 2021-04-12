import React from 'react'
import { Product } from '../../../../types/sanity'
type ProductThumbnailProps = {
  product: Product
}

const ProductThumbnail = ({ product }: ProductThumbnailProps) => {
  return (
    <>
      <p>{product.title}</p>
    </>
  )
}

export default ProductThumbnail
