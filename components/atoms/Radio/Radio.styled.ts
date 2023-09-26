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
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.forms.color.border.default};
  background-color: transparent;
  transition: border-color 0.3s;

  > span {
    display: flex;
    opacity: 0;
    visibility: hidden;
    border-radius: 50%;
    width: 80%;
    height: 80%;
    transition: opacity 0.2s;
  }

  ${RealInput}:checked + label > & {
    border-color: ${({ theme }) => theme.forms.choices.color.active};

    > span {
      opacity: 1;
      visibility: visible;
      background-color: ${({ theme }) => theme.forms.choices.color.active};
    }
  }
`
