import React, { useEffect, useRef } from 'react'
import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { ReactComponent as SearchIcon } from '../../images/loupe.svg'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import filterProducts from '../components/utils/filterProducts'

const InputWrapper = styled.form`
  border-bottom: 1px solid white;
  padding: 0 1rem;
  width: 60%;
  label {
    display: grid;
    grid-template-columns: 1fr 9fr;
    align-items: center;
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 80%;
    }
  `}
`
const SearchIconStyles = styled(SearchIcon)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  fill: white;
  transition: transform 0.2s;
  justify-self: center;
`
const InputStyles = styled.input`
  grid-column: 2 / span 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  outline: none;
  padding: 1rem;

  &:hover ~ svg,
  &:active ~ svg,
  &:focus ~ svg {
    transform: scale(1.2);
  }
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 95%;
    }
  `}
`

const Search = () => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])
  const location = useLocation()
  const searchQuery = location.search.replace('?', '')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => navigate(`./?${e.target.value}`)
  const {
    allSanityEquipment: { nodes: allProducts },
  } = useStaticQuery(graphql`
    query {
      allSanityEquipment {
        nodes {
          title
          images {
            asset {
              id
            }
          }
          id
          category {
            slug {
              current
            }
            mainCategory {
              slug {
                current
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  `)

  const filteredProduct = filterProducts(allProducts, searchQuery)
  const searchForm = (
    <InputWrapper>
      <label htmlFor="szukaj">
        <InputStyles
          ref={ref}
          id="szukaj"
          name="szukaj"
          onChange={handleChange}
          defaultValue={searchQuery}
        />
        <SearchIconStyles />
      </label>
    </InputWrapper>
  )
  return (
    <EquipmentOverview searchForm={searchForm}>
      {filteredProduct.map((product: Product) => (
        <ProductThumbnail key={product.id} product={product} />
      ))}
    </EquipmentOverview>
  )
}

export default React.memo(Search)
