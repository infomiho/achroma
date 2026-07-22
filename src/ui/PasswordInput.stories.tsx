import type { Meta, StoryObj } from '@storybook/react-vite'
import { PasswordInput } from './PasswordInput'

const meta = {
  title: 'Components/Password input',
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithError: Story = {
  args: { error: 'Enter your password' },
}
