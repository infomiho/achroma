import type { Meta, StoryObj } from '@storybook/react-vite'
import { DateInput } from './DateInput'

const meta = {
  title: 'Components/Date input',
  component: DateInput,
  tags: ['autodocs'],
  args: { id: 'card-expiry', legend: 'Card expiry date', hintText: 'For example, 31 3 2030' },
} satisfies Meta<typeof DateInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
