import React from 'react'
import CategoryMenu from './CategoryMenu'
import styled from 'styled-components'
import { H3 } from '../../../theme/Typography'
import { cardBasicStyle, centerMe } from '../../../theme/globalStyle'

type EquipmentOverviewProps = {
  title: string
  children: JSX.Element | JSX.Element[]
}
const EquipmentOverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 9rem repeat(2, 30rem);
  padding: 4rem;
  gap: 4rem;
`
const EquipmentHeadingWrapper = styled.div`
  ${cardBasicStyle}
  ${centerMe}
  grid-column: 2/-1;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};
`

const EquipmentOverview = ({ title, children }: EquipmentOverviewProps) => {
  return (
    <EquipmentOverviewWrapper>
      <CategoryMenu />
      <EquipmentHeadingWrapper>
        <H3 bigger>{title}</H3>
      </EquipmentHeadingWrapper>
      {children}
    </EquipmentOverviewWrapper>
  )
}

export default EquipmentOverview
