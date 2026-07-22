import { focusMain } from './focus'

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
