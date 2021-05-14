import React from 'react'
import { H3 } from '../../../theme/Typography'
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
  searchForm?: JSX.Element | JSX.Element[]
}

const EquipmentOverview = ({ title, searchForm, children }: EquipmentOverviewProps) => {
  return (
    <EquipmentOverviewWrapper>
      <CategoryMenuStyles>
        <CategoryMenu />
      </CategoryMenuStyles>
      <EquipmentHeadingWrapper>
        {title && <H3 bigger>{title}</H3>}
        {searchForm}
      </EquipmentHeadingWrapper>
      <EquipmentsWithPagination elements={children as JSX.Element[]} />
    </EquipmentOverviewWrapper>
  )
}

export default React.memo(EquipmentOverview)
