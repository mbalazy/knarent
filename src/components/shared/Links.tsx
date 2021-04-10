import React from 'react'
import styled, { css } from 'styled-components'
import { BottomBaseStyles as LikeAButtonStyles } from './Button'
import { Link } from 'gatsby'
import type { ButtonProps } from './Button'

interface LinkProps extends ButtonProps {
  to: string
}
const BaseLinkStyles = css`
  text-decoration: none;
  color: inherit;
  padding: 0.8rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.m};
`

const BigLinkStyles = styled(Link)`
  ${BaseLinkStyles}
  ${LikeAButtonStyles}
`
export const BigLink = ({ variant = 'primary', children, to }: LinkProps) => {
  return (
    <BigLinkStyles variant={variant} to={to}>
      {children}
    </BigLinkStyles>
  )
}

const SimpleLinkStyles = styled(Link)`
  ${BaseLinkStyles}
`
export const SimpleLink = ({ children, to }: LinkProps) => {
  return <SimpleLinkStyles to={to}>{children}</SimpleLinkStyles>
}
