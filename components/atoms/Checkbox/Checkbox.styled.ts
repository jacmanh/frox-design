import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  > label {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.sm};
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`

export const RealInput = styled.input`
  visibility: hidden;
  position: absolute;
  opacity: 0;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.forms.choices.color.active};
  border-radius: ${({ theme }) => theme.size.borderRadius.sm};
  border: 2px solid ${({ theme }) => theme.forms.color.border.default};
  background-color: transparent;
  transition: background-color 0.3s;

  > span {
    display: flex;
    opacity: 0;
    visibility: hidden;
    font-size: ${({ theme }) => theme.font.size.lg};
    transition: opacity 0.2s;
  }

  ${RealInput}:checked + label > & {
    background-color: ${({ theme }) => theme.forms.choices.color.background.active};

    > span {
      opacity: 1;
      visibility: visible;
    }
  }
`
