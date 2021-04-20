import React from 'react'
import { Category } from '../../../types/sanity'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { getImageFromId } from '../utils/getHeroImageFromId'
import { ImageOverlayWrapper, FullImageStyles } from '../shared/ImageOverlay'
import { H3 } from '../../../theme/Typography'
import { Link } from 'gatsby'

type CategoryThumbnailProps = {
  category: Category
}

const CategoryThumbnailWrapper = styled(Link)`
  ${cardBasicStyle}
  overflow: hidden;
  position: relative;
`
const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.lightText};
`

const CategoryThumbnail = ({ category }: CategoryThumbnailProps) => {
  const image = getImageFromId(category.images.asset.id, 'fullWidth')
  const categorySlug = `/${category.mainCategory.slug.current}/${category.slug.current}`
  return (
    <CategoryThumbnailWrapper to={categorySlug}>
      <ImageOverlayWrapper lighten>
        <FullImageStyles image={image} alt={category.title} />
      </ImageOverlayWrapper>
      <TitleWrapper>
        <H3>{category.title}</H3>
      </TitleWrapper>
    </CategoryThumbnailWrapper>
  )
}

export default CategoryThumbnail