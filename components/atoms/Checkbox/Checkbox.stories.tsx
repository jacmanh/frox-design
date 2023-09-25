import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './Checkbox.tsx'

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    onChange: { action: 'onChange' }
  },
  args: {
    id: 'checkbox'
  }
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Label'
  }
}
