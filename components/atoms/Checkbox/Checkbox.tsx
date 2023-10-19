import { forwardRef, InputHTMLAttributes } from 'react'

import CheckMarkIcon from './assets/checkmark.svg'
import * as Styled from './Checkbox.styled'

export type CheckboxProps = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ error, label, ...props }, ref) => {
    const id = props.id || props.name
    const describedBy = error ? `${id}-error` : undefined

    return (
      <Styled.Container>
        <Styled.RealInput
          ref={ref}
          type="checkbox"
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...props}
          id={id}
        />

        <label htmlFor={id}>
          <Styled.Input>
            <span>
              <CheckMarkIcon />
            </span>
          </Styled.Input>
          <span>{label}</span>
        </label>
        {error && <Styled.Error aria-describedby={describedBy}>{error}</Styled.Error>}
      </Styled.Container>
    )
  }
)
