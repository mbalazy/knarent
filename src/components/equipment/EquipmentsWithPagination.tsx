import React from 'react'
import { useState } from 'react'
import styled, { css } from 'styled-components'

type EquipmentPaginationProps = {
  elements: JSX.Element[]
}
type PageButtonProps = {
  active: boolean
}

const PaginationStyles = styled.div`
  grid-column: 2/-1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
const ButtonStyles = css`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  border-radius: ${({ theme }) => theme.border.light};
  border: none;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: inherit;

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }
`
const PageButtonsWrapper = styled.div`
  display: flex;
`
const NextPage = styled.button`
  ${ButtonStyles}
`
const PrevPage = styled.button`
  ${ButtonStyles}
`
const PageButton = styled.button<PageButtonProps>`
  ${ButtonStyles}
  border: 1px solid ${({ theme }) => theme.colors.accent1};
  background-color: white;
  color: ${({ theme }) => theme.colors.primaryText};

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.lightText};
      background-color: ${({ theme }) => theme.colors.accent1};
    `}
`

const EquipmentsWithPagination = ({ elements }: EquipmentPaginationProps) => {
  const elementsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const pagesCount = Math.ceil(elements.length / elementsPerPage)
  const pagesArr = Array.from(Array(pagesCount).keys())

  const indexStart = elementsPerPage * (currentPage - 1)
  const indexEnd = elementsPerPage * currentPage
  const handleChangePage = (nextPage: number) => setCurrentPage(nextPage)
  return (
    <>
      {elements.slice(indexStart, indexEnd)}
      <PaginationStyles>
        <PrevPage disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>
          Poprzednia
        </PrevPage>
        <PageButtonsWrapper>
          {pagesArr.map((i) => {
            const page = i + 1
            return (
              <PageButton
                active={page === currentPage}
                key={i}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </PageButton>
            )
          })}
        </PageButtonsWrapper>
        <NextPage
          disabled={currentPage === pagesCount}
          onClick={() => handleChangePage(currentPage + 1)}
        >
          Następna
        </NextPage>
      </PaginationStyles>
    </>
  )
}

export default EquipmentsWithPagination
