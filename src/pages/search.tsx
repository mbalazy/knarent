import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import VisuallyHidden from '../components/shared/VisuallyHidden'
import filterProducts from '../components/utils/filterProducts'
import { useAllProducts } from '../graphql/useAllProducts'
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
  const allProducts = useAllProducts()
  const filteredProduct = filterProducts(allProducts, searchQuery)
  const searchForm = (
    <InputWrapper>
      <label htmlFor="szukaj" role="search">
        <VisuallyHidden>szukaj</VisuallyHidden>
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
