import { forwardRef, InputHTMLAttributes } from 'react'

import * as Styled from './Radio.styled'

export type RadioProps = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ label, error, ...props }, ref) => {
  const id = props.id || props.name
  const describedBy = error ? `${id}-error` : undefined

  return (
    <Styled.Container>
      <Styled.RealInput
        ref={ref}
        type="radio"
        aria-invalid={!!error}
        aria-describedby={describedBy}
        {...props}
        id={id}
      />

      <label htmlFor={id}>
        <Styled.Input>
          <span />
        </Styled.Input>
        {label && <span>{label}</span>}
      </label>

      {error && <Styled.Error aria-describedby={describedBy}>{error}</Styled.Error>}
    </Styled.Container>
  )
})
