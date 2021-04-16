import React from 'react'
import CategoryMenu from './CategoryMenu'
type EquipmentOverviewProps = {
  children: JSX.Element | JSX.Element[]
}
import styled from 'styled-components'

const EquipmentOverviewWrapper = styled.div`
  display: grid;
`

const EquipmentOverview = (props: EquipmentOverviewProps) => {
  return (
    <EquipmentOverviewWrapper>
      <CategoryMenu />
      <p>{props.children}</p>
    </EquipmentOverviewWrapper>
  )
}

export default EquipmentOverview
