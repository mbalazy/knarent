import React from 'react'
import { H3 } from '../../../theme/Typography'
import SearchForm from '../shared/SearchForm'
import CategoryMenu from './CategoryMenu'
import {
  CategoryMenuStyles,
  EquipmentHeadingWrapper,
  EquipmentOverviewWrapper,
} from './EquipmentOverview.styles'
import EquipmentsWithPagination from './EquipmentsWithPagination'

type EquipmentOverviewProps = {
  title?: string
  children: JSX.Element | JSX.Element[]
  withSearchForm?: boolean
}

const EquipmentOverview = ({ title, withSearchForm, children }: EquipmentOverviewProps) => {
  return (
    <EquipmentOverviewWrapper>
      <CategoryMenuStyles>
        <CategoryMenu />
      </CategoryMenuStyles>
      <EquipmentHeadingWrapper>
        {title && <H3 bigger>{title}</H3>}
        {withSearchForm && <SearchForm />}
      </EquipmentHeadingWrapper>
      <EquipmentsWithPagination elements={children as JSX.Element[]} />
    </EquipmentOverviewWrapper>
  )
}

export default React.memo(EquipmentOverview)
