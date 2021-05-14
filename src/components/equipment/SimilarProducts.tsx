import React from 'react'
import { Product } from '../../../types/sanity'
import ProductThumbnail from '../shared/ProductThumbnail'
import {
  SimilarProductsHeading,
  SimilarProductsList,
  SimilarProductsWrapper,
} from './SimilarProducts.style'

type SimilarProductsProps = {
  products: Product[]
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <SimilarProductsWrapper>
      <SimilarProductsHeading>Inne przedmioty z tej kategorii</SimilarProductsHeading>
      <SimilarProductsList>
        {products.map((product) => (
          <li key={product.id}>
            <ProductThumbnail product={product} />
          </li>
        ))}
      </SimilarProductsList>
    </SimilarProductsWrapper>
  )
}

export default SimilarProducts
