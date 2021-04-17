import React from 'react'
import CategoryMenu from './CategoryMenu'
import styled from 'styled-components'
import { H3 } from '../../../theme/Typography'
import { MainCategory, Category } from '../../../types/sanity'
import { cardBasicStyle, center } from '../../../theme/globalStyle'
import CategoryThumbnail from './CategoryThumbnail'

type CategoryOverviewProps = {
  mainCategory: MainCategory
  categories: Category[]
}
const CategoryOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 9rem repeat(2, 30rem);
  padding: 4rem;
  gap: 4rem;
`
const CategoryHeadingStyles = styled.div`
  ${cardBasicStyle}
  ${center}
  grid-column: 2/-1;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};
`

const CategoryOverview = ({ mainCategory: { title }, categories }: CategoryOverviewProps) => {
  return (
    <CategoryOverviewWrapper>
      <CategoryMenu />
      <CategoryHeadingStyles>
        <H3 bigger>{title}</H3>
      </CategoryHeadingStyles>
      {categories.map((category) => (
        <CategoryThumbnail key={category.id} category={category} />
      ))}
    </CategoryOverviewWrapper>
  )
}

export default CategoryOverview
