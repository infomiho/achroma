import type { Meta, StoryObj } from '@storybook/react-vite'
import { StartArrow } from './StartArrow'

const meta = {
  title: 'Components/Start arrow',
  component: StartArrow,
  tags: ['autodocs'],
} satisfies Meta<typeof StartArrow>

export default meta
type Story = StoryObj<typeof meta>

export const InStartButton: Story = {
  render: () => (
    <a className="btn btn-primary" href="#start">
      Start now
      <StartArrow />
    </a>
  ),
}
