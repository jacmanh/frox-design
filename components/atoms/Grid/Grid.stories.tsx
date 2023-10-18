import { ReactNode } from 'react'

import { Grid } from '@atoms/Grid/Grid.tsx'
import { GridItem } from '@atoms/GridItem/GridItem.tsx'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Atoms/Grid',
  component: Grid
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof Grid>

const Item = ({ children }: { children?: ReactNode }) => (
  <div
    style={{
      height: '200px',
      backgroundColor: '#eee'
    }}
  >
    {children}
  </div>
)
export const Default: Story = {
  render: () => (
    <Grid $gap="sm" $autoFlow="column">
      <Item />
      <Item />
      <Item />
    </Grid>
  )
}

export const WithGridItem: Story = {
  render: () => (
    <Grid $gap="md" $autoFlow="column">
      <GridItem>
        <Item />
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
      <GridItem $colSpan={2}>
        <Item>$colSpan 2</Item>
      </GridItem>
      <GridItem>
        <Item />
      </GridItem>
    </Grid>
  )
}
