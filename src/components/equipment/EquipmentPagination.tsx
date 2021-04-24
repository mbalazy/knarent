import React from 'react'
import { useState } from 'react'
type EquipmentPaginationProps = {
  elements: JSX.Element[]
}
import styled from 'styled-components'

const PagesStyles = styled.div`
  grid-column: 2/-1;
`

const EquipmentPagination = ({ elements }: EquipmentPaginationProps) => {
  console.log(elements)
  const elementsPerPage = 6
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(elements.length / elementsPerPage)
  console.log(pageCount)
  const indexStart = elementsPerPage * (page - 1)
  const indexEnd = elementsPerPage * page
  return (
    <>
      {elements.slice(indexStart, indexEnd)}
      <PagesStyles>pagi</PagesStyles>
    </>
  )
}

export default EquipmentPagination
