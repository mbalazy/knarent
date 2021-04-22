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

  display: flex;
  flex-direction: column;
`
const SimilarProductsList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 6rem;
  overflow-x: auto;

  padding: ${({ theme }) => theme.dimensions.equipmentMargin};
  padding-top: ${({ theme }) => theme.dimensions.equipmentGap};
  & > * {
    flex: 0 0 270px;
  }
`
const SimilarProductsHeading = styled(H3)`
  margin: ${({ theme }) => theme.dimensions.equipmentMargin} 0 0
    ${({ theme }) => theme.dimensions.equipmentMargin};
`

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
