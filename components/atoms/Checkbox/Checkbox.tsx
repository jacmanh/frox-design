import { InputHTMLAttributes } from 'react'

import { ReactComponent as CheckMarkIcon } from './assets/checkmark.svg'
import * as Styled from './Checkbox.styled'

export type CheckboxProps = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ label, ...props }: CheckboxProps) => (
  <Styled.Container>
    <Styled.RealInput type="checkbox" {...props} />

    <label htmlFor={props.id || props.name}>
      <Styled.Input>
        <span>
          <CheckMarkIcon />
        </span>
      </Styled.Input>
      <span>{label}</span>
    </label>
  </Styled.Container>
)
