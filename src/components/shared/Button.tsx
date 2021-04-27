import React from 'react'
import styled, { css } from 'styled-components'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondarySmall' | 'ghost' | 'ghostOutline' | 'active'
  disabled?: boolean
  active?: boolean
  children: string | number
  onClick?: () => void
}

export const BottomBaseStyles = css<ButtonProps>`
  border: none;
  cursor: pointer;
  display: inline-block;

  &:disabled,
  &[disabled] {
    border: 1px solid ${({ theme }) => theme.colors.grey100};
    background-color: transparent;
    color: #666666;
    cursor: default;
  }

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
      case 'secondarySmall':
        return css`
          color: ${({ theme }) => theme.colors.primaryText};
          background-color: ${({ theme }) => theme.colors.primary};
          font-size: ${({ theme }) => theme.fontSize.s};
          padding: 1rem 1.5rem;
          border: 1px solid transparent;
          border-radius: 10px;
        `
      case 'ghost':
        return css`
          color: #666666;
          background-color: transparent;
          border: 1px solid ${({ theme }) => theme.colors.grey100};
          border-radius: 10px;
        `
      case 'ghostOutline':
        return css`
          color: #666666;
          background-color: transparent;
          padding: 1rem 1.5rem;
          border: 2px solid ${({ theme }) => theme.colors.primary};
          border-radius: 10px;
        `
    }
  }}
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primaryText};
      background-color: ${({ theme }) => theme.colors.primary};
      cursor: default;
    `}
`
const ButtonStyles = styled.button`
  ${BottomBaseStyles}
`

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <ButtonStyles variant={variant} type="button" {...props}>
      {children}
    </ButtonStyles>
  )
}

export default Button
