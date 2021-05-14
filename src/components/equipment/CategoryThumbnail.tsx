import React from 'react'
import { H3 } from '../../../theme/Typography'
import { Category } from '../../../types/sanity'
import { FullImageStyles, ImageOverlayWrapper } from '../shared/ImageOverlay'
import { getImageFromId } from '../utils/getHeroImageFromId'
import { CategoryThumbnailWrapper, TitleWrapper } from './CategoryThumbnail.styles'

type CategoryThumbnailProps = {
  category: Category
}

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
