import React from 'react'
import { MainCategory } from '../../../../types/sanity'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { getImageFromId } from '../../utils/getHeroImageFromId'
import { H4, P } from '../../../../theme/Typography'
import { BigLink } from '../../shared/Links'
import { cardBasicStyle } from '../../../../theme/globalStyle'

type MainCategoryThumbanilProps = {
  mainCategory: MainCategory
}

const MainCategoryThumbnailWrapper = styled.article`
  ${cardBasicStyle}
  overflow-y: hidden;

  flex: 1 1 270px;

  display: flex;
  flex-direction: column;
`
const ImageStyles = styled(GatsbyImage)`
  flex: 0 0 280px;
`
const CopyWrapper = styled.div`
  flex: 1 1 200px;
  margin: 4rem 3rem 3rem;

  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: space-between;
`

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
