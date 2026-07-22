import type { Meta, StoryObj } from '@storybook/react-vite'
import { SiteFooter } from './SiteFooter'

const meta = {
  title: 'Components/Site footer',
  component: SiteFooter,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SiteFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
