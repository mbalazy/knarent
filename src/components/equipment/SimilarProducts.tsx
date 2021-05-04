import React from 'react'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { H3 } from '../../../theme/Typography'
import { Product } from '../../../types/sanity'
import ProductThumbnail from '../shared/ProductThumbnail'

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
  overflow-x: auto;

  padding: ${({ theme }) => theme.dimensions.equipmentMargin} 0;
  padding-top: ${({ theme }) => theme.dimensions.equipmentGap};

  & > * {
    flex: 0 0 270px;
    margin: 0 2rem;
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      padding: 2rem;
    }
  `}
`
const SimilarProductsHeading = styled(H3)`
  margin: ${({ theme }) => theme.dimensions.equipmentMargin} 0 0
    ${({ theme }) => theme.dimensions.equipmentMargin};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      margin: 4rem 0 1rem 3rem;
    }
  `}
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
