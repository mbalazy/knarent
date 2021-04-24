import { Product } from '../../../types/sanity'

const filterProducts = (allProducts: Product[], searchQuery: string) =>
  allProducts.filter((product) => {
    if (searchQuery === '' || searchQuery === null) return false
    else if (
      product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.keywords?.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true
    }
    return false
  })

export default filterProducts
