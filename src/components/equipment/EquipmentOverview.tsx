import React from 'react'
import CategoryMenu from './CategoryMenu'
import styled from 'styled-components'
import { H3 } from '../../../theme/Typography'
import { cardBasicStyle, centerInsideMe } from '../../../theme/globalStyle'

type EquipmentOverviewProps = {
  title?: string
  children: JSX.Element | JSX.Element[]
  searchForm?: JSX.Element | JSX.Element[]
}
const EquipmentOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 9rem repeat(2, 36rem);
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  width: 90vw;
  margin: ${({ theme }) => theme.dimensions.equipmentMargin};
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
`
const EquipmentHeadingWrapper = styled.div`
  ${cardBasicStyle}
  ${centerInsideMe}
  grid-column: 2/-1;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};
`

const EquipmentOverview = ({ title, searchForm, children }: EquipmentOverviewProps) => {
  console.log(children)
  return (
    <EquipmentOverviewWrapper>
      <CategoryMenu />
      <EquipmentHeadingWrapper>
        {title && <H3 bigger>{title}</H3>}
        {searchForm}
      </EquipmentHeadingWrapper>
      {children}
    </EquipmentOverviewWrapper>
  )
}

export default EquipmentOverview
