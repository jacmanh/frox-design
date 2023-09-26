import { InputHTMLAttributes } from 'react'

import * as Styled from './Radio.styled'

export type RadioProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Radio = ({ label, ...props }: RadioProps) => (
  <Styled.Container>
    <Styled.RealInput type="radio" />

    <label htmlFor={props.id || props.name}>
      <Styled.Input>
        <span />
      </Styled.Input>
      {label && <span>{label}</span>}
    </label>
  </Styled.Container>
)
