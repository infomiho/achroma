import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteHeader } from './SiteHeader'

const meta = {
  title: 'Components/Site header',
  component: SiteHeader,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: {
    nav: [
      ['Styles', '#styles'],
      ['Components', '#components'],
      ['Examples', '#examples'],
      ['Patterns', '#patterns'],
    ],
  },
} satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
