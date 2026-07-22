export type NavLinks = readonly (readonly [string, string])[]

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
