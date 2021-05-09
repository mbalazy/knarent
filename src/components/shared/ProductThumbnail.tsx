import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { cardBasicStyle, cardHoverEffect } from '../../../theme/globalStyle'
import { Product } from '../../../types/sanity'
import { getImageFromId } from '../utils/getHeroImageFromId'
type ProductThumbnailProps = {
  product: Product
}
const ProductThumbnailWrapper = styled(Link)`
  overflow-y: hidden;
  ${cardBasicStyle}
  ${cardHoverEffect}
  text-decoration: inherit;
  color: inherit;

  display: flex;
  flex-direction: column;
`
const ImageStyles = styled(GatsbyImage)`
  flex: 1 0 200px;
  margin: 2rem;
`
const CopyWrapper = styled.div`
  flex: 1 1 60px;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductThumbnail = ({
  product: {
    title,
    images,
    slug: { current: productSlug },
    category: {
      slug: { current: categorySlug },
      mainCategory: {
        slug: { current: mainCategorySlug },
      },
    },
  },
}: ProductThumbnailProps) => {
  const imageData = getImageFromId(images[0].asset.id, 'fullWidth')
  const getSlug = () => `/${mainCategorySlug}/${categorySlug}/${productSlug}`
  return (
    <ProductThumbnailWrapper to={getSlug()}>
      <ImageStyles image={imageData} alt={title} />
      <CopyWrapper>
        <h5>{title}</h5>
      </CopyWrapper>
    </ProductThumbnailWrapper>
  )
}

export default ProductThumbnail
