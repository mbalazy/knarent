import React from 'react'
import { ButtonStyles } from './Button.style'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondarySmall' | 'ghost' | 'ghostOutline' | 'active'
  disabled?: boolean
  active?: boolean
  children: string | number
  onClick?: () => void
}

const Button = ({ variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <ButtonStyles variant={variant} type="button" {...props}>
      {children}
    </ButtonStyles>
  )
}

export default Button
