import type { ReactNode } from 'react'

export function Details({ summary, className = '', children }: { summary: string; className?: string; children: ReactNode }) {
  return (
    <details className={`text-xl ${className}`}>
      <summary className="cursor-pointer font-bold underline decoration-2 underline-offset-4 focus-visible:focus-ring">{summary}</summary>
      <p className="mt-4 max-w-prose border-l-4 border-rule pl-4">{children}</p>
    </details>
  )
}
