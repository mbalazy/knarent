import styled, { css } from 'styled-components'

type MenuProps = {
  vertical?: boolean
  onMobile?: boolean
}

export const MenuStyles = styled.ul<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 4rem;
  white-space: nowrap;
  gap: 3rem;

  ${({ vertical }) =>
    vertical &&
    css`
      display: grid;
      width: auto;
      margin: 0;
      gap: 2rem;
    `}
`
