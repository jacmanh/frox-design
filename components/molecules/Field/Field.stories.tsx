import type { Meta, StoryObj } from '@storybook/react'

import { Field } from './Field.tsx'

const meta = {
  title: 'Molecules/Field',
  component: Field,
  parameters: {},
  args: {
    id: 'field',
    label: 'Label',
    placeholder: 'Placeholder'
  }
} satisfies Meta<typeof Field>

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {}

export const WithIcons: Story = {
  args: {
    iconStart: 'user',
    iconEnd: 'email'
  }
}

export const WithError: Story = {
  args: {
    error: 'Error message'
  }
}
