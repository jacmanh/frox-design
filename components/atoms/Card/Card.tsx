import { PropsWithChildren } from 'react'

import * as Styled from './Card.styled'

type CardProps = PropsWithChildren<{
  centered?: boolean
}>

export const Card = ({ children, centered }: CardProps) => {
  return <Styled.Container $centered={centered}>{children}</Styled.Container>
}

export const CardFooter = ({ children }: CardProps) => {
  return <Styled.Footer>{children}</Styled.Footer>
}
