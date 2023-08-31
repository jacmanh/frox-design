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
  color: ${({ theme }) => theme.colors.text.default.interaction.default};
  background-color: ${({ theme }) => theme.colors.background.default.interaction.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text.default.interaction.hover};
    background-color: ${({ theme }) => theme.colors.background.default.interaction.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.colors.border.default.interaction.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.default.interaction.disabled};
    background-color: ${({ theme }) => theme.colors.background.default.interaction.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border.default.interaction.disabled};
  }
`

const dimCss = css`
  color: ${({ theme }) => theme.colors.text.dim.interaction.default};
  background-color: ${({ theme }) => theme.colors.background.dim.interaction.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text.dim.interaction.hover};
    background-color: ${({ theme }) => theme.colors.background.dim.interaction.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.colors.border.dim.interaction.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.dim.interaction.disabled};
    background-color: ${({ theme }) => theme.colors.background.dim.interaction.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border.dim.interaction.disabled};
  }
`

const ghostCss = css`
  color: ${({ theme }) => theme.colors.text.ghost.interaction.default};
  background-color: ${({ theme }) => theme.colors.background.ghost.interaction.default};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border.ghost.interaction.default};

  &:hover {
    color: ${({ theme }) => theme.colors.text.ghost.interaction.hover};
    background-color: ${({ theme }) => theme.colors.background.ghost.interaction.hover};
    box-shadow: inset 0 0 0 4px ${({ theme }) => theme.colors.border.ghost.interaction.hover};
  }

  &[disabled] {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.text.ghost.interaction.disabled};
    background-color: ${({ theme }) => theme.colors.background.ghost.interaction.disabled};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border.ghost.interaction.disabled};
  }
`

const defaultSizeCss = css`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.radius.default};
`

const smCss = css`
  width: 100px;
  font-size: ${({ theme }) => theme.font.size.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.border.radius.sm};
`

const mdCss = css`
  width: 120px;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.radius.md};
`

const lgCss = css`
  width: 140px;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.border.radius.default};
`
