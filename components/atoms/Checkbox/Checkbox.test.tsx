import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@tests/test-utils.tsx'

import { Checkbox } from './Checkbox.tsx'

describe('Atoms/Checkbox', () => {
  const onChange = jest.fn()

  it('triggers onChange', () => {
    render(<Checkbox onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')

    expect(screen.queryByRole('checkbox')).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders with label', () => {
    render(<Checkbox name="checkbox" label="label" onChange={onChange} />)

    const label = screen.getByText('label').closest('label')

    expect(label).toHaveTextContent('label')
    expect(label).toHaveAttribute('for', 'checkbox')
  })
})
