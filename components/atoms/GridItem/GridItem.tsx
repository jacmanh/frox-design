import { PropsWithChildren } from 'react'

import styled from 'styled-components'

export type GridItemProps = PropsWithChildren<{
  $colSpan?: number
  $colStart?: number
  $colEnd?: number
  $rowSpan?: number
  $rowStart?: number
  $rowEnd?: number
}>

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${({ $colSpan }) => `span ${$colSpan}`};
  grid-column-end: ${({ $colEnd }) => $colEnd};
  grid-column-start: ${({ $colStart }) => $colStart};

  grid-row: ${({ $rowSpan }) => `span ${$rowSpan}`};
  grid-row-start: ${({ $rowStart }) => $rowStart};
  grid-row-end: ${({ $rowEnd }) => $rowEnd};
`
