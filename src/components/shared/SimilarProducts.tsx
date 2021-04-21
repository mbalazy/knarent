import React from 'react'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { H3 } from '../../../theme/Typography'
import { Product } from '../../../types/sanity'
import ProductThumbnail from './ProductThumbnail'

type SimilarProductsProps = {
  products: Product[]
}

const SimilarProductsWrapper = styled.section`
  ${cardBasicStyle}
  background-color: ${({ theme }) => theme.colors.grey005};
  padding: ${({ theme }) => theme.dimensions.equipmentMargin};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
`
const SimilarProductsList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 6rem;
  overflow-x: auto;

  & > * {
    flex: 0 0 270px;
  }
`

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  console.log(products)
  return (
    <SimilarProductsWrapper>
      <H3>Inne przedmioty z tej kategorii</H3>
      <SimilarProductsList>
        {products.map((product) => (
          <ProductThumbnail key={product.id} product={product} />
        ))}
      </SimilarProductsList>
    </SimilarProductsWrapper>
  )
}

export default SimilarProducts
