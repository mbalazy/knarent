import React from 'react'
import { graphql } from 'gatsby'
import { Product as ProductType } from '../../types/sanity'
import { H3 } from '../../theme/Typography'
import styled from 'styled-components'
import { cardBasicStyle } from '../../theme/globalStyle'
import CategoryMenu from '../components/equipment/CategoryMenu'
import CONSTS from '../../theme/CONSTS'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { navigate } from 'gatsby'

type MainCategoryProps = {
  data: {
    product: ProductType
  }
}

const ProductWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  margin: ${({ theme }) => theme.dimensions.equipmentMargin};
`
const ProductMainInfoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.dimensions.equipmentGap};

  & > article {
    ${cardBasicStyle}
  }
`
const ProductMainInfo = styled.article`
  grid-column: 2/-1;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`
const ImagesStyles = styled.div`
  flex: 3;
`
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4rem;
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
const ProductDescription = styled.article`
  grid-column: 2/-1;
  grid-row: -2/-1;
`

const Category = ({ data: { product } }: MainCategoryProps) => {
  const { telephones } = CONSTS
  const handleGoBack = () => navigate(-1)

  return (
    <ProductWrapper>
      <ProductMainInfoGrid>
        <CategoryMenu />
        <ProductMainInfo>
          <ImagesStyles>
            <p>zdjecie</p>
          </ImagesStyles>
          <ProductDetails>
            <H3>{product.title}</H3>
            <PhoneStyles>
              <Phone />
              {telephones[0]}
            </PhoneStyles>
          </ProductDetails>
          <BackButton onClick={handleGoBack}>
            <Arrow width="8" /> Powrót
          </BackButton>
        </ProductMainInfo>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductMainInfoGrid>
    </ProductWrapper>
  )
}

export default Category

export const query = graphql`
  query SanityProducts($slug: String!) {
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
  }
`
