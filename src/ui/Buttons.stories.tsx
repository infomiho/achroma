import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Primitives/Buttons',
}

export default meta

export const Variants: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <button className="btn btn-primary" type="button">Continue</button>
      <button className="btn btn-secondary" type="button">Save draft</button>
      <button className="btn btn-warning" type="button">Delete record</button>
    </div>
  ),
}
