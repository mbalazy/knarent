import { graphql, navigate } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import CONSTS from '../../theme/CONSTS'
import { cardBasicStyle } from '../../theme/globalStyle'
import { H2, P } from '../../theme/Typography'
import { Product as ProductType } from '../../types/sanity'
import CategoryMenu from '../components/equipment/CategoryMenu'
import { CategoryMenuStyles } from '../components/equipment/EquipmentOverview'
import ProductGallery from '../components/equipment/ProductGallery'
import SimilarProducts from '../components/equipment/SimilarProducts'
import BusinessFeatures from '../components/shared/BusinessFeatures'

type ProductProps = {
  data: {
    product: ProductType
    similarProducts: { nodes: ProductType[] }
  }
}

const ProductWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.equipmentMargin};
  margin-top: ${({ theme }) => theme.dimensions.equipmentMargin};
`
const ProductMainInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
  section {
    ${cardBasicStyle}
  }
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      display: flex;
      flex-direction: column;
    }
  `}
`
const ProductMainInfo = styled.section`
  grid-column: 2/-1;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-column: 2/-1;
      flex-direction: column;
      padding: 2rem;
      gap: 4rem;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      flex: 1 1 30rem;
    }
  `}
`
const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      flex: 1 1 10rem;
      justify-content: space-evenly;
      gap: 2rem;
    }
  `}
`
const PhoneStyles = styled.div`
  padding: 2rem;
  margin: 0 4.2rem;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent3};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-radius: ${({ theme }) => theme.border.light};
  font-weight: 600;
  * {
    fill: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      padding: 2rem 3rem;
    }
  `}
`
const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 4.2rem;
  padding: 1rem 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: ${({ theme }) => theme.border.standard};
  border: none;

  display: flex;
  align-items: center;
  gap: 1rem;
`
const ProductDescription = styled.section`
  padding: 3rem 4rem;
  grid-column: 2/-1;
  grid-row: -2 / span 1;
  max-height: 26rem;
  overflow-y: auto;

  position: relative;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      flex: 1 1 30rem;
    }
  `}
`
const Product = ({ data: { product, similarProducts } }: ProductProps) => {
  const { telephones } = CONSTS
  const handleGoBack = () => navigate(-1)

  return (
    <ProductWrapper>
      <ProductMainInfoGrid>
        <CategoryMenuStyles>
          <CategoryMenu />
        </CategoryMenuStyles>
        <ProductMainInfo>
          <ProductGallery sanityImagesData={product.images} productTitle={product.title} />
          <ProductDetails>
            <H2>{product.title}</H2>
            <PhoneStyles>
              <Phone />
              {telephones[0]}
            </PhoneStyles>
          </ProductDetails>
          <BackButton onClick={handleGoBack}>
            <Arrow width="8" /> <span>Powrót</span>
          </BackButton>
        </ProductMainInfo>
        <ProductDescription>
          <P>{product.description}</P>
        </ProductDescription>
      </ProductMainInfoGrid>
      <BusinessFeatures />
      <SimilarProducts products={similarProducts.nodes} />
    </ProductWrapper>
  )
}

export default Product

export const query = graphql`
  query SanityProducts($slug: String!, $thisProductCategory: String!) {
    product: sanityEquipment(slug: { current: { eq: $slug } }) {
      id
      title
      description
      images {
        asset {
          id
        }
      }
    }
    similarProducts: allSanityEquipment(
      filter: { slug: { current: { ne: $slug } }, category: { id: { eq: $thisProductCategory } } }
    ) {
      nodes {
        id
        title
        images {
          asset {
            id
          }
        }
        slug {
          current
        }
        category {
          slug {
            current
          }
          mainCategory {
            slug {
              current
            }
          }
        }
      }
    }
  }
`
