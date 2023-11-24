import type { Meta, StoryObj } from '@storybook/react'

import { Card, CardFooter } from './Card'

const meta = {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Card Content',
    centered: false
  }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {}
export const WithFooter: Story = {
  args: {
    children: (
      <>
        Card Content
        <CardFooter>Footer</CardFooter>
      </>
    )
  }
}
