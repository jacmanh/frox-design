import { ReactNode } from 'react'

import { Flex } from '@atoms/Flex/Flex.tsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Flex',
  component: Flex
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof Flex>

const Item = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '200px',
      height: '200px',
      backgroundColor: '#eee'
    }}
  >
    {children}
  </div>
)
export const Default: Story = {
  render: () => (
    <Flex $gap="1em">
      <Item />
      <Item />
      <Item />
    </Flex>
  )
}
