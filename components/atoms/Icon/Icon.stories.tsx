import { Icon } from '@atoms/Icon/Icon.tsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {}
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    name: 'user'
  }
}
