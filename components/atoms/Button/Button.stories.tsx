import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Hello World!'
  },
  argTypes: {
    onClick: { action: 'onClick' },
    $dim: {
      control: {
        type: 'boolean'
      }
    },
    $ghost: {
      control: {
        type: 'boolean'
      }
    },
    $size: {
      control: {
        type: 'select'
      },
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Dim: Story = {
  args: {
    $dim: true
  }
}

export const Ghost: Story = {
  args: {
    $ghost: true
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
