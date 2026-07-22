import type { Meta, StoryObj } from '@storybook/react-vite'
import { ConfirmationPanel } from './ConfirmationPanel'

const meta = {
  title: 'Components/Confirmation panel',
  component: ConfirmationPanel,
  tags: ['autodocs'],
  args: {
    heading: <h1 className="text-balance text-3xl font-bold sm:text-4xl">Membership confirmed</h1>,
    children: (
      <>
        Reference number<br /><strong>HDJ2123F</strong>
      </>
    ),
  },
} satisfies Meta<typeof ConfirmationPanel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
