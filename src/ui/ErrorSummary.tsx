import type { Ref } from 'react'
import { focusTarget } from './focus'

export function ErrorSummary({ errors, ref }: { errors: readonly (readonly [string, string])[]; ref?: Ref<HTMLDivElement> }) {
  if (errors.length === 0) return null

  return (
    <div className="border-4 border-danger p-5 outline-none" ref={ref} role="alert" tabIndex={-1} aria-labelledby="error-summary-title">
      <h2 className="heading-m" id="error-summary-title">There is a problem</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 font-bold">
        {errors.map(([targetId, message]) => (
          <li key={targetId}>
            <a className="text-danger-dark underline focus-visible:focus-ring" href={`#${targetId}`} onClick={(event) => focusTarget(event, targetId)}>
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
