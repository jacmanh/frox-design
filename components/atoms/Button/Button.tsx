import { ButtonHTMLAttributes } from 'react'

import styled, { css } from 'styled-components'

export type ButtonProps = {
  $dim?: boolean
  $ghost?: boolean
  $size?: 'sm' | 'md' | 'lg'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = styled.button.attrs({ type: 'button' })<ButtonProps>`
  font-family: inherit;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.md};
  border: 0;
  cursor: pointer;

  ${({ $dim, $ghost }) => ($dim ? dimCss : $ghost ? ghostCss : defaultCss)}
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return smCss
      case 'md':
        return mdCss
      case 'lg':
        return lgCss
      default:
        return defaultSizeCss
    }
  }}
`

const defaultCss = css`
  color: ${({ theme }) => theme.color.interaction.text.primary.default};
  background-color: red;

  &:hover {
    color: ${({ theme }) => theme.color.interaction.text.primary.hover};
    background-color: ${({ theme }) => theme.color.interaction.background.primary.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color.interaction.border.primary.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.interaction.text.primary.disabled};
    background-color: ${({ theme }) => theme.color.interaction.background.primary.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.interaction.border.primary.disabled};
  }
`

const dimCss = css`
  color: ${({ theme }) => theme.color.interaction.text.dim.default};
  background-color: ${({ theme }) => theme.color.interaction.background.dim.default};

  &:hover {
    color: ${({ theme }) => theme.color.interaction.text.dim.hover};
    background-color: ${({ theme }) => theme.color.interaction.background.dim.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color.interaction.border.primary.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.interaction.text.dim.disabled};
    background-color: ${({ theme }) => theme.color.interaction.background.dim.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.interaction.border.dim.disabled};
  }
`

const ghostCss = css`
  color: ${({ theme }) => theme.color.interaction.text.ghost.default};
  background-color: ${({ theme }) => theme.color.interaction.background.ghost.default};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.interaction.border.ghost.default};

  &:hover {
    color: ${({ theme }) => theme.color.interaction.text.ghost.hover};
    background-color: ${({ theme }) => theme.color.interaction.background.ghost.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.color.interaction.border.ghost.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.interaction.text.ghost.disabled};
    background-color: ${({ theme }) => theme.color.interaction.background.ghost.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.interaction.border.ghost.disabled};
  }
`

const defaultSizeCss = css`
  width: 100%;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.size.borderRadius.default};
`

const smCss = css`
  width: 100px;
  font-size: ${({ theme }) => theme.font.size.sm};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.size.borderRadius.sm};
`

const mdCss = css`
  width: 120px;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.size.borderRadius.md};
`

const lgCss = css`
  width: 140px;
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.size.borderRadius.default};
`
