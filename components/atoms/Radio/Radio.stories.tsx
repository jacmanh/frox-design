import type { Meta, StoryObj } from '@storybook/react'

import { Radio } from './Radio.tsx'

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    onChange: { action: 'onChange' }
  },
  args: {
    id: 'checkbox'
  }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: 'Label'
  }
}
