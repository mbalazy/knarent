import React from 'react'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { Product } from '../../../types/sanity'

type SimilarProductsProps = {
  products: Product[]
}

const SimilarProductsWrapper = styled.section`
  ${cardBasicStyle}
  background-color: ${({ theme }) => theme.colors.grey005};
`

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  console.log(products)
  return (
    <SimilarProductsWrapper>
      <h4>SimilarProducts</h4>
      {products.map((product) => product.title)}
    </SimilarProductsWrapper>
  )
}

export default SimilarProducts
