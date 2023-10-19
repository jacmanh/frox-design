import { Icon as IconComponent } from '@atoms/Icon/Icon.tsx'
import styled, { css } from 'styled-components'

export const Label = styled.label`
  display: block;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.forms.color.text.default};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  outline: none;
  color: ${({ theme }) => theme.forms.color.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.forms.color.placeholder.default};
  }
`

export const Error = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.forms.error.text};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.default}`};
`

export const Icon = styled(IconComponent)`
  opacity: 0.2;
  transition: opacity 0.3s;
`

export const Container = styled.div<{ $hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.default};
  position: relative;
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: ${({ theme }) => theme.size.borderRadius.default};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.forms.color.border.default};
  padding: 0 ${({ theme }) => theme.space.default};
  transition: box-shadow 0.1s;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    height: 70%;
    -webkit-text-fill-color: ${({ theme }) => theme.forms.color.text.default};
    -webkit-box-shadow: 0 0 0 40rem ${({ theme }) => theme.background.primary} inset;
  }

  &:focus-within {
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.forms.color.border.hover};

    ${Icon} {
      opacity: 1;
    }
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.forms.error.border};

      &:focus-within {
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.forms.error.border};
      }
    `}
`
