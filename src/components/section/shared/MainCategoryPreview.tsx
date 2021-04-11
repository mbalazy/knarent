import React from 'react'
import { MainCategory } from '../../../../types/sanity'
type MainCategoryPreviewProps = {
  mainCategory: MainCategory
}

const MainCategoryPreview = ({ mainCategory }: MainCategoryPreviewProps) => {
  return (
    <>
      <p>{mainCategory.title}</p>
    </>
  )
}

export default MainCategoryPreview
