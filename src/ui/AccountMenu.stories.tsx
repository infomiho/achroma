import type { Meta, StoryObj } from '@storybook/react-vite'
import { userEvent, within } from 'storybook/test'
import { AccountMenu } from './AccountMenu'

const meta = {
  title: 'Components/Account menu',
  component: AccountMenu,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative flex justify-end bg-ink px-4 py-3 text-paper">
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'Amina Patel',
    children: (
      <>
        <a className="menu-item" href="#account">Account</a>
        <a className="menu-item" href="#sign-out">Sign out</a>
      </>
    ),
  },
} satisfies Meta<typeof AccountMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {}

export const Open: Story = {
  play: async ({ canvasElement }) => {
    await userEvent.click(within(canvasElement).getByText('Amina Patel'))
  },
}

export const WithAvatar: Story = {
  args: { avatarSrc: 'https://avatars.githubusercontent.com/infomiho?s=56' },
}
