import React from 'react'
import type { ButtonProps } from './Button'
import { BigLinkStyles, SimpleLinkStyles } from './Links.style'

interface LinkProps extends ButtonProps {
  to: string
  smaller?: boolean
}

export const BigLink = ({ variant = 'primary', children, to }: LinkProps) => {
  return (
    <BigLinkStyles variant={variant} to={to}>
      {children}
    </BigLinkStyles>
  )
}

export const SimpleLink = ({ children, to, smaller, ...delegated }: LinkProps) => {
  return (
    <SimpleLinkStyles to={to} smaller={smaller} {...delegated}>
      {children}
    </SimpleLinkStyles>
  )
}
