import type { ReactNode } from 'react'
import { SkipLink, type NavLinks } from '../../ui'

type ExampleShellProps = {
  exampleTitle: string
  serviceName?: string
  serviceHref?: string
  nav?: NavLinks
  account?: ReactNode
  phaseBanner?: boolean
  children: ReactNode
}

export function ExampleShell({ exampleTitle, serviceName = 'Example', serviceHref = '#/examples', nav, account, phaseBanner = true, children }: ExampleShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />

      <div className="border-b-4 border-ink bg-mist">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 text-lg sm:px-6">
          <p className="flex items-center gap-3 font-bold">
            <span className="tag">Example</span>
            {exampleTitle}
          </p>
          <a className="link" href="#/examples">Back to all examples</a>
        </div>
      </div>

      <header className="relative bg-ink text-paper">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-4 sm:px-6">
          <a className="text-2xl font-bold tracking-tight underline-offset-4 hover:underline focus-visible:focus-ring-inverted" href={serviceHref}>
            {serviceName}
          </a>
          {account}
        </div>
      </header>

      {nav && (
        <nav className="border-b-2 border-ink bg-mist" aria-label="Service navigation">
          <ul className="mx-auto flex w-full max-w-5xl flex-wrap gap-x-6 gap-y-2 px-4 py-3 text-lg font-bold sm:px-6">
            {nav.map(([itemLabel, href]) => {
              const isCurrent = href === window.location.hash

              return (
                <li key={href}>
                  <a
                    aria-current={isCurrent ? 'page' : undefined}
                    className={isCurrent ? 'inline-block border-b-4 border-ink no-underline focus-visible:focus-ring' : 'underline hover:decoration-4 focus-visible:focus-ring'}
                    href={href}
                  >
                    {itemLabel}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      )}

      {phaseBanner && (
        <div className="border-b-2 border-ink">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center gap-3 px-4 py-3 text-lg sm:px-6">
            <strong className="tag">Beta</strong>
            <span>This is a new service. Your feedback will help improve it.</span>
          </div>
        </div>
      )}

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 outline-none sm:px-6 md:py-12" id="main" tabIndex={-1}>
        {children}
      </main>

      <footer className="border-t-4 border-ink bg-mist px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-lg md:flex-row md:items-center md:justify-between">
          <p className="font-bold">Built with Achroma. Everything here is fictional.</p>
          <a className="link" href="#/examples">Back to all examples</a>
        </div>
      </footer>
    </div>
  )
}
