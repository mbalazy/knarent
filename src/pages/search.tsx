import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import filterProducts from '../components/utils/filterProducts'

const InputStyles = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  border-bottom: 1px solid white;
  outline: none;
  padding: 1rem 1.8rem;

  &:active,
  &:hover,
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.lightText};
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
  const searchForm = <InputStyles onChange={handleChange} defaultValue={searchQuery} />
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
