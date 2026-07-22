import { focusMain } from './focus'

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
