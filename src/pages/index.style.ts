import styled from 'styled-components'

export const HomeWrapper = styled.main`
  display: grid;
  gap: ${({ theme }) => theme.dimensions.mainContentGap};
  justify-items: center;
`
