// import React from 'react'
import { InputContainer } from './styles'
import { IInput } from './types'

function index({value}: IInput) {
  return (
    <InputContainer>
      <input disabled value={value}/>
    </InputContainer>
  )
}

export default index