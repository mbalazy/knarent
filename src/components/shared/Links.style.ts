import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { bigLinkHoverEffect } from '../../../theme/globalStyle'
import type { ButtonProps } from './Button'
import { BottomBaseStyles as LikeAButtonStyles } from './Button.style'

interface LinkProps extends ButtonProps {
  to: string
  smaller?: boolean
}
export const BaseLinkStyles = css`
  text-decoration: none;
  color: inherit;
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
`

export const BigLinkStyles = styled(Link)<LinkProps>`
  ${BaseLinkStyles}
  ${LikeAButtonStyles}
  ${bigLinkHoverEffect}
  text-align: center;
`

export const SimpleLinkStyles = styled(Link)<LinkProps>`
  ${BaseLinkStyles}
  padding: 1rem 1.8rem;
  ${({ smaller }) =>
    smaller &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `}
`
