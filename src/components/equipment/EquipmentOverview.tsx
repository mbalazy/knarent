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
  margin: ${({ theme }) => theme.dimensions.equipmentMargin};

  display: grid;
  gap: ${({ theme }) => theme.dimensions.equipmentGap};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 7rem repeat(2, 30rem) 6rem;

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

      max-width: 85vw;
      margin: 3rem 0;
    }
  `}
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      grid-template-columns: 1fr;
    }
  `}
`
export const CategoryMenuStyles = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;

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
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent2};
  grid-column: 2/-1;

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

export default React.memo(EquipmentOverview)
