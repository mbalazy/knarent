import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '../shared/Button'
import { useLocation } from '@reach/router'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}

const PaginationStyles = styled.div`
  grid-column: 2/-1;
  grid-row: 4/-1;
  gap: 2rem;

  display: grid;
  grid-auto-flow: column;
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
      grid-auto-flow: row;
      justify-content: center;
      gap: 2.4rem;
    }
  `}
`
const PageButtonsWrapper = styled.div`
  max-width: 80vw;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  justify-items: center;
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

  const location = useLocation()
  const searchQuery = location.search.replace('?', '')
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

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
