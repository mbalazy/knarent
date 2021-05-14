import { graphql, navigate } from 'gatsby'
import React from 'react'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import CONSTS from '../../theme/CONSTS'
import { H2, P } from '../../theme/Typography'
import { Product as ProductType } from '../../types/sanity'
import CategoryMenu from '../components/equipment/CategoryMenu'
import { CategoryMenuStyles } from '../components/equipment/EquipmentOverview.styles'
import ProductGallery from '../components/equipment/ProductGallery'
import SimilarProducts from '../components/equipment/SimilarProducts'
import BusinessFeatures from '../components/shared/BusinessFeatures'
import {
  BackButton,
  PhoneStyles,
  ProductDescription,
  ProductDetails,
  ProductMainInfo,
  ProductMainInfoGrid,
  ProductWrapper,
} from './Product.style'

type ProductProps = {
  data: {
    product: ProductType
    similarProducts: { nodes: ProductType[] }
  }
}
const Product = ({ data: { product, similarProducts } }: ProductProps) => {
  const [firstTelephone] = CONSTS.telephones
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
              {firstTelephone}
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
