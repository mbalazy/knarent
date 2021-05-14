import styled, { css } from 'styled-components'
import { ReactComponent as SearchIcon } from '../../images/loupe.svg'

export const InputWrapper = styled.form`
  border-bottom: 1px solid white;
  padding: 0 1rem;
  width: 60%;
  label {
    display: grid;
    grid-template-columns: 1fr 9fr;
    align-items: center;
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 80%;
    }
  `}
`
export const SearchIconStyles = styled(SearchIcon)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  fill: ${({ theme }) => theme.colors.white};
  transition: transform 0.2s;
  justify-self: center;
`
export const InputStyles = styled.input`
  grid-column: 2 / span 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.lightText};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  outline: none;
  padding: 1rem;

  &:hover ~ svg,
  &:active ~ svg,
  &:focus ~ svg {
    transform: scale(1.2);
  }
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      width: 95%;
    }
  `}
`
