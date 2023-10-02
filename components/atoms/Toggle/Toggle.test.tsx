import { fireEvent } from '@testing-library/dom'
import { render, screen } from '@tests/test-utils.tsx'

import { Toggle } from './Toggle.tsx'

describe('Atoms/Toggle', () => {
  const onChange = jest.fn()

  it('triggers onChange', () => {
    render(<Toggle onChange={onChange} />)

    const checkbox = screen.getByRole('checkbox')

    expect(screen.queryByRole('checkbox')).not.toBeChecked()

    fireEvent.click(checkbox)

    expect(checkbox).toBeChecked()
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
