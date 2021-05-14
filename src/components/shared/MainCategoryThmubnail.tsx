import React from 'react'
import { H4, P } from '../../../theme/Typography'
import { MainCategory } from '../../../types/sanity'
import { BigLink } from '../shared/Links'
import { getImageFromId } from '../utils/getHeroImageFromId'
import {
  CopyWrapper,
  ImageStyles,
  MainCategoryThumbnailWrapper,
} from './MainCategoryThmubnail.style'

type MainCategoryThumbanilProps = {
  mainCategory: MainCategory
}

const MainCategoryThumbnail = ({
  mainCategory: { images, title, slug, description },
}: MainCategoryThumbanilProps) => {
  const imageData = getImageFromId(images.asset.id)

  return (
    <MainCategoryThumbnailWrapper>
      <ImageStyles image={imageData} alt={title} />
      <CopyWrapper>
        <H4>{title}</H4>
        <P>{description}</P>
        <BigLink variant="secondary" to={`/${slug.current}`}>
          Zobacz więcej
        </BigLink>
      </CopyWrapper>
    </MainCategoryThumbnailWrapper>
  )
}

export default MainCategoryThumbnail
