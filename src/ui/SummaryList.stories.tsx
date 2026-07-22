import type { Meta, StoryObj } from '@storybook/react-vite'
import { summaryRows } from '../data'
import { SummaryList } from './SummaryList'

const meta = {
  title: 'Components/Summary list',
  component: SummaryList,
  tags: ['autodocs'],
  args: { rows: summaryRows, changeHref: '#change' },
} satisfies Meta<typeof SummaryList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
