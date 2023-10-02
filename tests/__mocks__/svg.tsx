import React from 'react'

type SvgProps = {
  name?: string
} & React.SVGProps<SVGSVGElement>

const SvgrMock = React.forwardRef<never, SvgProps>((props, ref) => (
  <svg ref={ref} aria-label={props.name} {...props} />
))

export const ReactComponent = SvgrMock
export default SvgrMock
