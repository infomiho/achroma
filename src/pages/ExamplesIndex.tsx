import { SiteFooter, SiteHeader, SkipLink } from '../ui'
import { errorPages, exampleApps, type ExampleMeta } from './examples/manifest'

const nav = [['Home', '#/']] as const

function ExamplesIndex() {
  return (
    <>
      <SkipLink />
      <SiteHeader nav={nav} />
      <main id="main" tabIndex={-1} className="outline-none">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-lg">
            <ol className="flex flex-wrap gap-2">
              <li><a className="link" href="#/">Home</a></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Examples</li>
            </ol>
          </nav>

          <div className="mt-8 max-w-3xl space-y-4">
            <h1 className="heading-xl">Examples</h1>
            <p className="lead">Small apps built with the system, each on its own pages.</p>
          </div>

          <section className="mt-12 border-t-4 border-ink pt-8" aria-labelledby="example-apps">
            <h2 className="heading-l" id="example-apps">Example apps</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {exampleApps.map((app) => (
                <li key={app.path}>
                  <ExampleCard example={app} />
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t-4 border-ink pt-8" aria-labelledby="error-pages">
            <div className="max-w-3xl space-y-4">
              <h2 className="heading-l" id="error-pages">Error pages</h2>
              <p className="lead">What users see when something goes wrong.</p>
            </div>
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {errorPages.map((page) => (
                <li key={page.path}>
                  <ExampleCard example={page} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function ExampleCard({ example }: { example: ExampleMeta }) {
  return (
    <article className="panel h-full">
      <h3 className="heading-m"><a className="link" href={example.path}>{example.title}</a></h3>
      <p className="mt-3 text-pretty text-lg">{example.description}</p>
      {example.showcases && <p className="form-hint mt-3">Shows: {example.showcases}</p>}
    </article>
  )
}

export default ExamplesIndex
