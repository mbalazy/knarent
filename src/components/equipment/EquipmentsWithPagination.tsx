import { useLocation } from '@reach/router'
import React, { useEffect, useState } from 'react'
import Button from '../shared/Button'
import { PageButtonsWrapper, PaginationStyles } from './EquipmentsWithPagination.styles'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}

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
                  key={page}
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

export default React.memo(EquipmentsWithPagination)
