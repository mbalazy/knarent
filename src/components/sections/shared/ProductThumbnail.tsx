import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../../theme/globalStyle'
import { Product } from '../../../../types/sanity'
import { getImageFromId } from '../../utils/getHeroImageFromId'
type ProductThumbnailProps = {
  product: Product
}
const ProductThumbnailWrapper = styled.article`
  overflow-y: hidden;
  ${cardBasicStyle}

  display: flex;
  flex-direction: column;
`
const ImageStyles = styled(GatsbyImage)`
  flex: 1 0 250px;
  margin: 2rem;
`
const CopyWrapper = styled.div`
  flex: 1 1 80px;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProductThumbnail = ({ product: { title, images, slug } }: ProductThumbnailProps) => {
  const imageData = getImageFromId(images[0].asset.id, 'fullWidth')
  return (
    <ProductThumbnailWrapper>
      <ImageStyles image={imageData} alt={title} />
      <CopyWrapper>
        <h5>{title}</h5>
      </CopyWrapper>
    </ProductThumbnailWrapper>
  )
}

export default ProductThumbnail
