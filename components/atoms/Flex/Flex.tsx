import { commonTheme } from '@theme/theme.ts'
import styled from 'styled-components'

export type FlexProps = {
  $direction?: string
  $justify?: string
  $align?: string
  $wrap?: string
  $gap?: keyof (typeof commonTheme)['space']
  $grow?: number
  $shrink?: number
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  flex-wrap: ${({ $wrap }) => $wrap};
  gap: ${({ $gap }) => $gap && commonTheme.space[$gap]};
  flex-grow: ${({ $grow }) => $grow};
  flex-shrink: ${({ $shrink }) => $shrink};
`
