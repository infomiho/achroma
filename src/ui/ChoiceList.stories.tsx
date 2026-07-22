import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChoiceList } from './ChoiceList'

const meta = {
  title: 'Components/Choice list',
  component: ChoiceList,
  tags: ['autodocs'],
} satisfies Meta<typeof ChoiceList>

export default meta
type Story = StoryObj<typeof meta>

export const Checkboxes: Story = {
  args: { type: 'checkbox', name: 'support', items: ['Text alternatives', 'Keyboard support', 'Plain language review'] },
  render: (args) => (
    <fieldset className="grid gap-2">
      <legend className="form-label">What do you need?</legend>
      <ChoiceList {...args} />
    </fieldset>
  ),
}

export const Radios: Story = {
  args: { type: 'radio', name: 'account', items: ['Yes', 'No', 'I do not know'], defaultValue: 'Yes' },
  render: (args) => (
    <fieldset className="grid gap-2">
      <legend className="form-label">Do you have an account?</legend>
      <ChoiceList {...args} />
    </fieldset>
  ),
}
