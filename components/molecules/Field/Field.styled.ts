import { Icon as IconComponent } from '@atoms/Icon/Icon.tsx'
import styled, { css } from 'styled-components'

export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.forms.color.text.default};
  margin: ${({ theme }) => theme.space.xs} 0;
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
  color: ${({ theme }) => theme.forms.error.text};
  font-size: ${({ theme }) => theme.font.size.xs};
  background-color: ${({ theme }) => theme.forms.error.background};
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.default}`};
  border-bottom-left-radius: ${({ theme }) => theme.size.borderRadius.default};
  border-bottom-right-radius: ${({ theme }) => theme.size.borderRadius.default};
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

  &:focus-within {
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.forms.color.border.hover};

    ${Icon} {
      opacity: 1;
    }
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: inset 0 0 0 1px ${({ theme }) => theme.forms.error.border};

      &:focus-within {
        box-shadow: inset 0 0 0 2px ${({ theme }) => theme.forms.error.border};
      }
    `}
`
