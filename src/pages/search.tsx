import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import filterProducts from '../components/utils/filterProducts'
import { ReactComponent as SearchIcon } from '../../images/loupe.svg'

const InputWrapper = styled.form`
  border-bottom: 1px solid white;
  padding: 0 1rem;
  label {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    align-items: center;
  }
`
const SearchIconStyles = styled(SearchIcon)`
  fill: white;
  transition: transform 0.2s;
`
const InputStyles = styled.input`
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
`

const Search = () => {
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
        <InputStyles id="szukaj" name="szukaj" onChange={handleChange} defaultValue={searchQuery} />
        <SearchIconStyles />
      </label>
    </InputWrapper>
  )
  return (
    <>
      <EquipmentOverview searchForm={searchForm}>
        {filteredProduct.map((product: Product) => (
          <ProductThumbnail key={product.id} product={product} />
        ))}
      </EquipmentOverview>
    </>
  )
}

export default Search
