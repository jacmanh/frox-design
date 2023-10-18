import { PropsWithChildren } from 'react'

import styled from 'styled-components'

export type GridProps = PropsWithChildren<{
  $templateColumns?: string
  $gap?: string
  $rowGap?: string
  $columnGap?: string
  $autoFlow?: string
  $autoColumns?: string
  $autoRows?: string
  $column?: string
  $row?: string
}>

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ $templateColumns }) => $templateColumns};
  gap: ${({ $gap }) => $gap};
  row-gap: ${({ $rowGap }) => $rowGap};
  column-gap: ${({ $columnGap }) => $columnGap};
  grid-auto-flow: ${({ $autoFlow }) => $autoFlow};
  grid-auto-columns: ${({ $autoColumns }) => $autoColumns};
  grid-auto-rows: ${({ $autoRows }) => $autoRows};
  grid-column: ${({ $column }) => $column};
  grid-row: ${({ $row }) => $row};
`
