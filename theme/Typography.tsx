import styled, { css } from 'styled-components'
type Props = {
  bigger?: boolean
  smaller?: boolean
}

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
`
export const H2 = styled.h2<Props>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 1.4;

  ${({ bigger }) =>
    bigger &&
    css`
      font-size: ${({ theme }) => theme.fontSize['2xl']};
    `}
`
export const H3 = styled.h3<Props>`
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.4;

  ${({ bigger }) =>
    bigger &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
    `}
`
export const H4 = styled.h4<Props>`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 1.4;

  ${({ bigger }) =>
    bigger &&
    css`
      font-size: ${({ theme }) => theme.fontSize.l};
    `}
  ${({ smaller }) =>
    smaller &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`
export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: 1.4;
  text-align: left;
`
