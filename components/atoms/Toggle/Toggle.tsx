import React from 'react'

import * as Styled from './Toggle.styled'

export const Toggle = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Styled.Container>
      <Styled.RealInput type="checkbox" {...props} />
      <Styled.Line htmlFor={props.id || props.name}>
        <Styled.Button />
      </Styled.Line>
    </Styled.Container>
  )
}
