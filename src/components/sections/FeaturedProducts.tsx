import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { useFeaturedProducts } from '../../graphql/useFeaturedProducts'
import ProductThumbnail from '../shared/ProductThumbnail'
import Section from '../shared/Section'
import { FeaturedWrapper } from './FeaturedProducts.style'

const FeaturedProducts = () => {
  const featuredProducts = useFeaturedProducts()
  console.log(featuredProducts)
  return (
    <Section heading={CONSTS.featuredProductsHeading}>
      <FeaturedWrapper>
        {featuredProducts.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </FeaturedWrapper>
    </Section>
  )
}

export default FeaturedProducts
