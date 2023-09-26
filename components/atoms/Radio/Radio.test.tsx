import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@tests/test-utils.tsx'

import { Radio } from './Radio.tsx'

describe('Atoms/Radio', () => {
  it('triggers onChange', () => {
    const onChange = jest.fn()
    render(<Radio onChange={onChange} />)

    const radio = screen.getByRole('radio')

    fireEvent.click(radio)

    expect(radio).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders with label', () => {
    render(<Radio label="label" />)

    const label = screen.getByText('label')

    expect(label).toBeInTheDocument()
  })
})
