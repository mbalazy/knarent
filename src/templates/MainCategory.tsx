import React from 'react'
type MainCategoryProps = {
  pageContext: {
    slug: string
  }
}

const MainCategory = ({ pageContext: { slug } }: MainCategoryProps) => {
  return (
    <>
      <p>MainCategory</p>
      <p>{slug}</p>
    </>
  )
}

export default MainCategory
