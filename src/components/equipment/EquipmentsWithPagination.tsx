import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}

const PagesStyles = styled.div`
  grid-column: 2/-1;

  display: flex;
  justify-content: center;
  gap: 4rem;
`

const EquipmentsWithPagination = ({ elements }: EquipmentPaginationProps) => {
  const elementsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const pagesCount = Math.ceil(elements.length / elementsPerPage)
  const pagesArr = Array.from(Array(pagesCount).keys())

  const indexStart = elementsPerPage * (currentPage - 1)
  const indexEnd = elementsPerPage * currentPage
  return (
    <>
      {elements.slice(indexStart, indexEnd)}
      <PagesStyles>
        {pagesArr.map((i) => {
          const page = i + 1
          return <button key={i}>{page}</button>
        })}
      </PagesStyles>
    </>
  )
}

export default EquipmentsWithPagination
