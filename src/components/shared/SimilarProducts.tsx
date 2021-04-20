import React from 'react'
import { Product } from '../../../types/sanity'

type SimilarProductsProps = {
  products: Product[]
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  console.log(products)
  return (
    <>
      <h4>SimilarProducts</h4>
      {products.map((product) => product.title)}
    </>
  )
}

export default SimilarProducts
