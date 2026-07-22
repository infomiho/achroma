import type { Meta, StoryObj } from '@storybook/react-vite'
import { ErrorSummary } from './ErrorSummary'

const meta = {
  title: 'Components/Error summary',
  component: ErrorSummary,
  tags: ['autodocs'],
  args: {
    errors: [
      ['postcode', 'Enter a full postcode'],
      ['card-expiry-day', 'Enter your card expiry date'],
    ] as const,
  },
} satisfies Meta<typeof ErrorSummary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
