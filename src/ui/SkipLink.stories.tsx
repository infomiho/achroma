import type { Meta, StoryObj } from '@storybook/react-vite'
import { within } from 'storybook/test'
import { SkipLink } from './SkipLink'

const meta = {
  title: 'Components/Skip link',
  component: SkipLink,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative min-h-28">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SkipLink>

export default meta
type Story = StoryObj<typeof meta>

export const Focused: Story = {
  play: ({ canvasElement }) => {
    within(canvasElement).getByText('Skip to main content').focus()
  },
}
