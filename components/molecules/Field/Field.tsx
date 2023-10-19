import { forwardRef, InputHTMLAttributes } from 'react'

import { IconProps } from '@atoms/Icon/Icon.tsx'

import * as Styled from './Field.styled.ts'

export type FieldProps = {
  label?: string
  error?: string
  iconStart?: IconProps['name']
  iconEnd?: IconProps['name']
} & InputHTMLAttributes<HTMLInputElement>

export const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ error, label, iconStart, iconEnd, ...props }, ref) => {
    const id = props.id || props.name
    const describedBy = error ? `${id}-error` : undefined

    return (
      <div>
        {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
        <Styled.Container $hasError={!!error}>
          {iconStart && <Styled.Icon name={iconStart} />}
          <Styled.Input
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...props}
            id={id}
          />
          {iconEnd && <Styled.Icon name={iconEnd} />}
        </Styled.Container>
        {error && <Styled.Error id={describedBy}>{error}</Styled.Error>}
      </div>
    )
  }
)
