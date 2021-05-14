import { useLocation } from '@reach/router'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import filterProducts from '../components/utils/filterProducts'
import { InputStyles, InputWrapper, SearchIconStyles } from './search.style'

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
