import React from 'react'
import styled from 'styled-components'
import { BaseStyles } from './Button'
import { Link } from 'gatsby'

export type Props = {
  variant?: 'primary' | 'secondary'
  to: string
  children: string
}

const LinkStyles = styled(Link)`
  ${BaseStyles}
  text-decoration: none;
`

const BaseLink = ({ variant = 'primary', children, to }: Props) => {
  return (
    <LinkStyles variant={variant} to={to}>
      {children}
    </LinkStyles>
  )
}

export default BaseLink
