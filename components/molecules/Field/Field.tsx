import { InputHTMLAttributes } from 'react'

import { IconProps } from '@atoms/Icon/Icon.tsx'

import * as Styled from './Field.styled.ts'

export type FieldProps = {
  label?: string
  error?: string
  iconStart?: IconProps['name']
  iconEnd?: IconProps['name']
} & InputHTMLAttributes<HTMLInputElement>

export const Field = ({ error, label, iconStart, iconEnd, ...props }: FieldProps) => {
  return (
    <div>
      {label && <Styled.Label htmlFor={props.id || props.name}>{label}</Styled.Label>}
      <Styled.Container $hasError={!!error}>
        {iconStart && <Styled.Icon name={iconStart} />}
        <Styled.Input {...props} />
        {iconEnd && <Styled.Icon name={iconEnd} />}
      </Styled.Container>
      {error && <Styled.Error>{error}</Styled.Error>}
    </div>
  )
}
