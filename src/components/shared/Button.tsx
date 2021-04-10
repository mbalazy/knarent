import React from 'react'
import styled, { css } from 'styled-components'

export type Props = {
  variant?: 'primary' | 'secondary'
  children: string
}

export const BaseStyles = css<Props>`
  border: none;
  cursor: pointer;
  display: inline-block;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          color: ${({ theme }) => theme.colors.lightText};
          background-color: ${({ theme }) => theme.colors.secondary};
          font-size: ${({ theme }) => theme.fontSize.l};
          padding: 2rem 5rem;
          border-radius: 16px;
        `
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.colors.primaryText};
          background-color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.fontSize.s};
          padding: 1.5rem 5rem;
          border-radius: 10px;
        `
    }
  }}
`
const ButtonStyles = styled.button`
  ${BaseStyles}
`

const Button = ({ variant = 'primary', children, ...props }: Props) => {
  return (
    <ButtonStyles variant={variant} type="button" {...props}>
      {children}
    </ButtonStyles>
  )
}

export default Button
