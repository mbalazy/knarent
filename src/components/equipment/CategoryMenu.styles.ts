import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

type CategoryMenuProps = {
  onMobile?: boolean
}

export const CategoryMenuStyles = styled.div<CategoryMenuProps>`
  ${cardBasicStyle}
  ${({ onMobile }) =>
    onMobile &&
    css`
      flex: 1;
      margin-top: 2rem;
    `}

  ${({ onMobile }) =>
    !onMobile &&
    css`
      overflow-y: auto;
      max-height: 80rem;
      height: 100%;
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
    `}
`
export const LinksStyles = styled.ul`
  display: grid;
  gap: 2.6rem;
  padding: 3rem;
  white-space: nowrap;
`
export const MenuLinkStyles = styled(Link)`
  text-decoration: none;
  color: inherit;
`
