import type { ReactNode } from 'react'

export function ConfirmationPanel({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-success p-8 text-center text-paper">
      {heading}
      <p className="mt-4 text-2xl">{children}</p>
    </div>
  )
}
