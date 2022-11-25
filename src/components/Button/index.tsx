import React from 'react'
import { ButtonContainer } from './styles'
import { IButton } from './types'

function Button({label, onClick}:IButton) {
  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}

export default Button