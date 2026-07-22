import type { Meta, StoryObj } from '@storybook/react-vite'
import { Details } from './Details'

const meta = {
  title: 'Components/Details',
  component: Details,
  tags: ['autodocs'],
  args: {
    summary: 'Where to find your membership number',
    children: 'Contact support and include the email address you signed up with.',
  },
} satisfies Meta<typeof Details>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
