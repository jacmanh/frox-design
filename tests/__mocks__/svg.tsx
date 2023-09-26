import React from 'react'

const SvgrMock = React.forwardRef<never, any>((props, ref) => (
  <svg ref={ref} aria-label={props.name} {...props} />
))

export const ReactComponent = SvgrMock
export default SvgrMock
