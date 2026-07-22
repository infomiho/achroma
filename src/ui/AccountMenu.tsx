import type { ReactNode } from 'react'

function initialsOf(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function AccountMenu({ name, avatarSrc, children }: { name: string; avatarSrc?: string; children: ReactNode }) {
  return (
    <details className="group sm:relative">
      <summary className="flex min-h-11 cursor-pointer select-none list-none items-center gap-2.5 text-lg font-bold focus-visible:focus-ring-inverted [&::-webkit-details-marker]:hidden">
        {avatarSrc ? (
          <img alt="" className="size-7 border-2 border-paper" src={avatarSrc} />
        ) : (
          <span aria-hidden="true" className="grid size-7 place-items-center border-2 border-paper text-sm">
            {initialsOf(name)}
          </span>
        )}
        <span className="sr-only">Account: </span>
        {name}
        <svg aria-hidden="true" className="size-4 transition-transform duration-100 ease-out group-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="m3 6 5 5 5-5" />
        </svg>
      </summary>
      <div className="absolute inset-x-0 top-full z-10 divide-y-2 divide-ink border-4 border-ink bg-paper text-ink sm:inset-x-auto sm:right-0 sm:min-w-56">
        {children}
      </div>
    </details>
  )
}
