import { forwardRef } from 'react'

import * as Styled from './Icon.styled'
import { IconComponents, IconList } from './IconList.tsx'

export type IconProps = {
  name: keyof typeof IconList
} & React.HTMLAttributes<HTMLSpanElement>

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, ...props }, ref) => {
  const SvgComponent = IconComponents[name]

  return SvgComponent ? (
    <Styled.Container ref={ref} {...props}>
      <SvgComponent />
    </Styled.Container>
  ) : null
})
