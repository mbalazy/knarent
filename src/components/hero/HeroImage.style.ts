import styled, { css } from 'styled-components'

export const HeroContentWrapper = styled.header`
  position: relative;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  width: 100%;
  ${({ theme: { down } }) => css`
    ${down('620px', true)} {
      min-height: 100vh;
    }
  `}
`
