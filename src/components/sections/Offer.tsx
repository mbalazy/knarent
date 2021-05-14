import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { useAllCategory } from '../../graphql/useAllCategory'
import MainCategoryThumbnail from '../shared/MainCategoryThmubnail'
import Section from '../shared/Section'
import { OfferWrapper } from './Offer.style'

const Offer = () => {
  const { mainCategories } = useAllCategory()
  return (
    <Section heading={CONSTS.offerHeading} subheading={CONSTS.offerSubheading}>
      <OfferWrapper>
        {mainCategories.map((mainCategory) => (
          <MainCategoryThumbnail mainCategory={mainCategory} key={mainCategory.id} />
        ))}
      </OfferWrapper>
    </Section>
  )
}

export default Offer
