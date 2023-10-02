import { shadeHexColor } from '@theme/utils.ts'
import styled from 'styled-components'

export const RealInput = styled.input`
  position: absolute;
  opacity: 0;
`

export const Button = styled.span`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: -5%;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.forms.choices.color.active};
  border-radius: 50%;
  transform: translateY(-50%);
  transition:
    left 0.2s ease-in-out,
    background-color 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`

export const Line = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.forms.choices.color.background.default};
  border-radius: ${({ theme }) => theme.size.borderRadius.lg};
  transition: background-color 0.3s ease-in-out;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 48px;
  height: 20px;

  ${RealInput}:checked {
    + label {
      background: ${({ theme }) => theme.forms.choices.color.background.active};

      ${Button} {
        background-color: ${({ theme }) => theme.forms.choices.color.active};
        left: calc(100% - 20px);
      }
    }
  }

  ${RealInput}:disabled {
    + label {
      cursor: not-allowed;

      ${Button} {
        background-color: ${({ theme }) => theme.forms.choices.color.background.disabled};
      }
    }
  }

  &:focus-within {
    ${RealInput} {
      + label {
        background-color: ${({ theme }) => theme.forms.choices.color.background.active};
      }
    }
    ${RealInput}:checked {
      + label ${Button} {
        box-shadow: 0 0 0 4px ${({ theme }) => shadeHexColor(theme.forms.choices.color.active, 0.5)};
      }
    }
  }
`
