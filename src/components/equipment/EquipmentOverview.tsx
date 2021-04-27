import React from 'react'
import CategoryMenu from './CategoryMenu'
import styled, { css } from 'styled-components'
import { H3 } from '../../../theme/Typography'
import { cardBasicStyle, centerInsideMe } from '../../../theme/globalStyle'
import EquipmentsWithPagination from './EquipmentsWithPagination'

type EquipmentOverviewProps = {
  title?: string
  children: JSX.Element | JSX.Element[]
  searchForm?: JSX.Element | JSX.Element[]
}
const EquipmentOverviewWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 7rem repeat(2, 30rem) 6rem;
  margin: ${({ theme }) => theme.dimensions.equipmentMargin};
  gap: ${({ theme }) => theme.dimensions.equipmentGap};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 7rem repeat(auto-fill, 36rem);
    }
  `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 7rem repeat(auto-fit, 36rem);
    }
  `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-template-columns: 1fr;
    }
  `}
`
const CategoryMenuStyles = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 4;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      grid-row: 1 / 6;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      display: none;
    }
  `}
`
const EquipmentHeadingWrapper = styled.div`
  ${cardBasicStyle}
  ${centerInsideMe}
  grid-column: 2/-1;
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      grid-column: 1/-1;
    }
  `}
`

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

export default EquipmentOverview
