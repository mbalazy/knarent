import React from 'react'
import styled, { css } from 'styled-components'

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  children: string
  onClick?: () => void
}

const ButtonStyles = styled.button<ButtonProps>`
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

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <ButtonStyles variant={variant} type="button" {...props}>
      {children}
    </ButtonStyles>
  )
}

export default Button
