import { forwardRef, useEffect, useState } from 'react'

import * as Styled from './Icon.styled'
import { IconList } from './IconList.tsx'

export type IconProps = {
  name: keyof typeof IconList
} & React.HTMLAttributes<HTMLSpanElement>

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({ name, ...props }, ref) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    const files = import.meta.glob<{ ReactComponent: React.FC }>('./assets/*.svg')
    const component = files[`./assets/${name}.svg`]
    if (component) {
      component().then(module => {
        setSvgComponent(() => module.ReactComponent)
      })
      return
    }
  }, [name])

  return SvgComponent ? (
    <Styled.Container ref={ref} {...props}>
      <SvgComponent />
    </Styled.Container>
  ) : null
})
