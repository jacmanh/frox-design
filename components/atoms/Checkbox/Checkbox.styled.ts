import styled from 'styled-components'

export const RealInput = styled.input`
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
  transition:
    background-color 0.3s,
    border-color 0.3s;

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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;

  > label {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space.sm};
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  &:focus-within {
    ${RealInput} + label > ${Input} {
      border-color: ${({ theme }) => theme.forms.color.border.hover};
    }
  }
`

export const Error = styled.div`
  flex-basis: 100%;
  color: ${({ theme }) => theme.forms.error.text};
  font-size: ${({ theme }) => theme.font.size.xs};
  margin-left: calc(20px + ${({ theme }) => theme.space.sm});
`
