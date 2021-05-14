import styled, { css } from 'styled-components'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  max-width: 1300px;
  height: 100%;
  padding: 6rem;
  color: ${({ theme }) => theme.colors.lightText};

  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 6rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      padding: 3rem;
      gap: 1rem;
    }
  `}
`
export const Copy = styled.section`
  display: grid;
  justify-items: start;
  gap: 2rem;

  & > a {
    margin-top: 5vh;
    ${({ theme: { down, breakpoints } }) => css`
      ${down(breakpoints.s)} {
        justify-self: stretch;
      }
    `}
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      h1 {
        font-size: 2.4rem;
      }
      h2 {
        font-size: 2rem;
      }
      a {
        font-size: 1.6rem;
        align-self: center;
      }
    }
  `}
`
export const LogoWrapper = styled.section`
  flex: 1 1 300px;

  background-color: ${({ theme }) => theme.colors.lightText};
  border-radius: ${({ theme }) => theme.border.light};
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      height: 70%;
      grid-row: 1 / span 1;
    }
  `}
`
export const LogoStyles = styled(BigLogo)`
  padding: 6rem;
  height: 100%;
  width: 100%;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      padding: 3rem;
    }
  `}
`
