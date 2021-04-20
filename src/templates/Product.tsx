import React from 'react'
import { graphql, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import CONSTS from '../../theme/CONSTS'
import { cardBasicStyle } from '../../theme/globalStyle'
import { H2, P } from '../../theme/Typography'
import { Product as ProductType } from '../../types/sanity'
import CategoryMenu from '../components/equipment/CategoryMenu'
import BusinessFeatures from '../components/shared/BusinessFeatures'
import { getImageFromId } from '../components/utils/getHeroImageFromId'

type MainCategoryProps = {
  data: {
    product: ProductType
  }
}

const ProductWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  width: 90vw;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.dimensions.equipmentMargin};
  margin-top: ${({ theme }) => theme.dimensions.equipmentMargin};

  section {
    ${cardBasicStyle}
  }
`
const ProductMainInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
`
const ProductMainInfo = styled.section`
  grid-column: 2/-1;
  grid-row: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`
const ImagesStyles = styled.div`
  flex: 1;
  padding: 9rem;
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
const ProductDescription = styled.section`
  padding: 4rem;
  grid-column: 2/-1;
  grid-row: -2/-1;
`
const Category = ({ data: { product } }: MainCategoryProps) => {
  const { telephones } = CONSTS
  const handleGoBack = () => navigate(-1)
  const sampleOnePhoto = getImageFromId(product.images[0].asset.id)

  return (
    <ProductWrapper>
      <ProductMainInfoGrid>
        <CategoryMenu />
        <ProductMainInfo>
          <ImagesStyles>
            <GatsbyImage image={sampleOnePhoto} alt={product.title} />
          </ImagesStyles>
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
