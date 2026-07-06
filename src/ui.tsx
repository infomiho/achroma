import { useId, useState, type MouseEvent, type ReactNode, type Ref } from 'react'

export type NavLinks = readonly (readonly [string, string])[]

export type SummaryRow = readonly [string, string]

const dateParts = [
  ['day', 'Day', 'w-16'],
  ['month', 'Month', 'w-16'],
  ['year', 'Year', 'w-24'],
] as const

function focusMain(event: MouseEvent) {
  event.preventDefault()
  document.getElementById('main')?.focus()
}

function focusTarget(event: MouseEvent, id: string) {
  event.preventDefault()
  document.getElementById(id)?.focus()
}

export function SkipLink() {
  return (
    <a
      className="absolute left-4 top-4 z-10 -translate-y-24 border-2 border-ink bg-paper px-4 py-3 font-bold text-ink underline focus:translate-y-0 focus:focus-ring"
      href="#main"
      onClick={focusMain}
    >
      Skip to main content
    </a>
  )
}

export function SiteHeader({ nav }: { nav: NavLinks }) {
  return (
    <header className="border-b-4 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a className="text-2xl font-bold tracking-tight underline-offset-4 hover:underline focus-visible:focus-ring-inverted" href="#/">
          Achroma
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold">
            {nav.map(([itemLabel, href]) => (
              <li key={href}>
                <a className="underline hover:decoration-4 focus-visible:focus-ring-inverted" href={href}>
                  {itemLabel}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-ink bg-mist px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-lg md:flex-row md:items-center md:justify-between">
        <p className="font-bold">Reference implementation. Everything here is fictional.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="link" href="https://github.com/infomiho/achroma">GitHub</a>
          <a
            className="link"
            href="#main"
            onClick={(event) => {
              focusMain(event)
              window.scrollTo({ top: 0 })
            }}
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}

export function StartArrow() {
  return (
    <svg aria-hidden="true" className="ml-3 h-[1em] w-auto" viewBox="0 0 33 40" fill="currentColor">
      <path d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  )
}

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

export function NotificationBanner({ variant = 'info', ref, children }: { variant?: 'info' | 'success'; ref?: Ref<HTMLDivElement>; children: ReactNode }) {
  const titleId = useId()
  const isSuccess = variant === 'success'

  return (
    <div
      className={isSuccess ? 'border-4 border-success outline-none' : 'border-4 border-info outline-none'}
      ref={ref}
      role={isSuccess ? 'alert' : 'region'}
      tabIndex={-1}
      aria-labelledby={titleId}
    >
      <p className={isSuccess ? 'bg-success px-5 py-2 text-xl font-bold text-paper' : 'bg-info px-5 py-2 text-xl font-bold text-paper'} id={titleId}>
        {isSuccess ? 'Success' : 'Important'}
      </p>
      <p className="p-5 text-lg font-bold">{children}</p>
    </div>
  )
}

export function ConfirmationPanel({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-success p-8 text-center text-paper">
      {heading}
      <p className="mt-4 text-2xl">{children}</p>
    </div>
  )
}

export function PasswordInput({ error }: { error?: string }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={error ? 'grid gap-2 border-l-4 border-danger pl-4' : 'grid gap-2'}>
      <label className="form-label" htmlFor="password">Password</label>
      {error && (
        <p className="text-lg font-bold text-danger-dark" id="password-error"><span className="sr-only">Error: </span>{error}</p>
      )}
      <div className="flex max-w-md gap-2">
        <input
          className={error ? 'form-input w-full border-danger' : 'form-input w-full'}
          id="password"
          name="password"
          type={revealed ? 'text' : 'password'}
          autoComplete="current-password"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'password-error' : undefined}
        />
        <button className="btn btn-secondary" type="button" aria-controls="password" onClick={() => setRevealed((current) => !current)}>
          {revealed ? 'Hide' : 'Show'}<span className="sr-only"> password</span>
        </button>
      </div>
      <span aria-live="polite" className="sr-only">{revealed ? 'Your password is visible' : 'Your password is hidden'}</span>
    </div>
  )
}

export function Details({ summary, className = '', children }: { summary: string; className?: string; children: ReactNode }) {
  return (
    <details className={`text-xl ${className}`}>
      <summary className="cursor-pointer font-bold underline decoration-2 underline-offset-4 focus-visible:focus-ring">{summary}</summary>
      <p className="mt-4 max-w-prose border-l-4 border-rule pl-4">{children}</p>
    </details>
  )
}

export function SummaryList({ rows, changeHref }: { rows: readonly SummaryRow[]; changeHref: string }) {
  return (
    <dl className="@container divide-y-2 divide-ink border-y-2 border-ink text-lg">
      {rows.map(([term, value]) => (
        <div className="grid gap-1 py-4 @md:grid-cols-[minmax(8rem,12rem)_1fr_auto] @md:gap-2" key={term}>
          <dt className="font-bold">{term}</dt>
          <dd className="wrap-anywhere">{value}</dd>
          <dd><a className="link" href={changeHref}>Change<span className="sr-only"> {term.toLowerCase()}</span></a></dd>
        </div>
      ))}
    </dl>
  )
}

export function ChoiceList({ type, name, items, defaultValue }: { type: 'checkbox' | 'radio'; name: string; items: readonly string[]; defaultValue?: string }) {
  return (
    <div className="grid gap-3 text-xl">
      {items.map((item, index) => (
        <label className="flex items-start gap-3" key={item}>
          <input
            className="mt-1 size-7 shrink-0 accent-ink focus-visible:focus-ring"
            defaultChecked={item === defaultValue || undefined}
            id={`${name}-${index}`}
            name={name}
            type={type}
            value={item}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}

export function DateInput({ id, legend, hintText }: { id: string; legend: string; hintText: string }) {
  return (
    <fieldset className="grid gap-3" role="group" aria-describedby={`${id}-hint`}>
      <legend className="form-label">{legend}</legend>
      <p className="form-hint" id={`${id}-hint`}>{hintText}</p>
      <div className="flex flex-wrap gap-4">
        {dateParts.map(([part, partLabel, width]) => (
          <div className="grid gap-1" key={part}>
            <label className="font-bold" htmlFor={`${id}-${part}`}>{partLabel}</label>
            <input className={`form-input ${width}`} id={`${id}-${part}`} name={`${id}-${part}`} inputMode="numeric" />
          </div>
        ))}
      </div>
    </fieldset>
  )
}
