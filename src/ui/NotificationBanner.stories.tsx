import type { Meta, StoryObj } from '@storybook/react-vite'
import { NotificationBanner } from './NotificationBanner'

const meta = {
  title: 'Components/Notification banner',
  component: NotificationBanner,
  tags: ['autodocs'],
  args: { children: 'You can save this application and return to it later.' },
  argTypes: { variant: { control: 'radio', options: ['info', 'success'] } },
} satisfies Meta<typeof NotificationBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}

export const Success: Story = {
  args: { variant: 'success', children: 'Your application has been submitted.' },
}
