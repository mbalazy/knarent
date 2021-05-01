import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '../shared/Button'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}

const PaginationStyles = styled.div`
  grid-column: 2/-1;
  grid-row: 4/-1;
  gap: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-column: 2 / -1;
      grid-row: 5 / span 1;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1 / span 2;
      grid-row: 5 / span 1;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-column: 1 / span 1;
      grid-row: 8 / span 1;
      flex-direction: column;
      gap: 2.4rem;
    }
  `}
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

      {numberOfElements > elementsPerPage && (
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
                  variant="ghostOutline"
                  active={page === currentPage}
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
