import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'

const InputStyles = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  font-size: inherit;
  border-bottom: 1px solid white;
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
          keywords
          slug {
            current
          }
          category {
            id
            slug {
              current
            }
            mainCategory {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  const filteredProducts = allProducts.filter((product: Product) => {
    if (searchQuery === '' || searchQuery === null) return false
    else if (
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keywords?.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return product
    }
  })
  console.log(filteredProducts)
  return (
    <>
      <EquipmentOverview
        searchForm={<InputStyles onChange={handleChange} defaultValue={searchQuery} />}
      >
        <p>prod</p>
        <p>prod</p>
        <p>prod</p>
      </EquipmentOverview>
    </>
  )
}

export default Search
