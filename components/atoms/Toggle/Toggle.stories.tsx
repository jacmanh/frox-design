import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './Toggle.tsx'

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    onChange: { action: 'onChange' }
  },
  args: {
    id: 'toggle'
  }
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {}
export const DefaultChecked: Story = {
  args: {
    defaultChecked: true
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
