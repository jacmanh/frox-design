import { PropsWithChildren } from 'react'

import { commonTheme } from '@theme/theme.ts'
import styled from 'styled-components'

export type GridProps = PropsWithChildren<{
  $templateColumns?: string
  $gap?: keyof (typeof commonTheme)['space']
  $rowGap?: string
  $columnGap?: string
  $autoFlow?: string
  $autoColumns?: string
  $autoRows?: string
  $column?: string
  $row?: string
  $alignItems?: string
  $justifyContent?: string
}>

export const Grid = styled.div<GridProps>`
  display: grid;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  grid-template-columns: ${({ $templateColumns }) => $templateColumns};
  gap: ${({ $gap }) => $gap && commonTheme.space[$gap]};
  row-gap: ${({ $rowGap }) => $rowGap};
  column-gap: ${({ $columnGap }) => $columnGap};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow};
  grid-auto-columns: ${({ $autoColumns }) => $autoColumns};
  grid-auto-rows: ${({ $autoRows }) => $autoRows};
  grid-column: ${({ $column }) => $column};
  grid-row: ${({ $row }) => $row};
`
