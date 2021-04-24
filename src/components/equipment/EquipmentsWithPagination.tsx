import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../shared/Button'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}

const PaginationStyles = styled.div`
  grid-column: 2/-1;
  grid-row: 4/-1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
const PageButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

const EquipmentsWithPagination = ({ elements }: EquipmentPaginationProps) => {
  const elementsPerPage = 6
  const numberOfElements = elements.length
  const [currentPage, setCurrentPage] = useState(1)

  const pagesCount = Math.ceil(numberOfElements / elementsPerPage)
  const pagesArr = Array.from(Array(pagesCount).keys())

  const indexStart = elementsPerPage * (currentPage - 1)
  const indexEnd = elementsPerPage * currentPage
  const handleChangePage = (nextPage: number) => setCurrentPage(nextPage)
  return (
    <>
      {elements.slice(indexStart, indexEnd)}

      {numberOfElements >= elementsPerPage && (
        <PaginationStyles>
          <Button
            variant="secondarySmall"
            disabled={currentPage === 1}
            onClick={() => handleChangePage(currentPage - 1)}
          >
            Poprzednia
          </Button>
          <PageButtonsWrapper>
            {pagesArr.map((i) => {
              const page = i + 1
              return (
                <Button
                  variant="secondarySmall"
                  disabled={page === currentPage}
                  key={i}
                  onClick={() => handleChangePage(page)}
                >
                  {page}
                </Button>
              )
            })}
          </PageButtonsWrapper>
          <Button
            variant="secondarySmall"
            disabled={currentPage === pagesCount}
            onClick={() => handleChangePage(currentPage + 1)}
          >
            Następna
          </Button>
        </PaginationStyles>
      )}
    </>
  )
}

export default EquipmentsWithPagination
