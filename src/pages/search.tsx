import { useLocation } from '@reach/router'
import React from 'react'
import { Product } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'
import ProductThumbnail from '../components/shared/ProductThumbnail'
import filterProducts from '../components/utils/filterProducts'
import { useAllProducts } from '../graphql/useAllProducts'

const Search = () => {
  const location = useLocation()
  const searchQuery = location.search.replace('?', '')

  const allProducts = useAllProducts()
  const filteredProducts = filterProducts(allProducts, searchQuery)
  return (
    <EquipmentOverview withSearchForm>
      {filteredProducts.map((product: Product) => (
        <ProductThumbnail key={product.id} product={product} />
      ))}
    </EquipmentOverview>
  )
}

export default React.memo(Search)
