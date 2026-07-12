import { useRef, useState, type ReactNode } from 'react'
import { summaryRows } from '../data'
import { ChoiceList, ConfirmationPanel, DateInput, Details, ErrorSummary, NotificationBanner, PasswordInput, SiteFooter, SiteHeader, SkipLink, SummaryList } from '../ui'
import { exampleApps } from './examples/manifest'

const nav = [
  ['Styles', '#styles'],
  ['Components', '#components'],
  ['Examples', '#/examples'],
  ['Patterns', '#patterns'],
  ['Accessibility', '#accessibility'],
] as const

const tabs = [
  ['overview', 'Overview', 'Use tabs only when users need to switch between related views.'],
  ['evidence', 'Evidence', 'Show uploaded files and missing evidence.'],
  ['history', 'History', 'Show recent changes.'],
] as const

function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader nav={nav} />

      <main id="main" tabIndex={-1} className="outline-none">
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <p className="eyebrow inline-flex border-2 border-ink px-3 py-1">Reference implementation</p>
            <h1 className="text-balance text-[clamp(2.5rem,4.5vw+1.25rem,5.75rem)] font-bold leading-[1.05] tracking-[-0.04em]">
              Accessible components for services people rely on.
            </h1>
            <p className="lead max-w-2xl">
              React components for clear forms and pages. Mostly monochrome: colour is reserved for links, focus, errors, success and information.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn btn-primary" href="#components">
              View components
            </a>
            <a className="btn btn-secondary" href="#/examples">
              View example pages
            </a>
          </div>
        </section>

        <section id="styles" className="section-shell border-t-4">
          <div className="section-heading">
            <p className="eyebrow">Foundation</p>
            <h2 className="heading-l">Legible by default</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            <article className="panel">
              <h3 className="heading-m">Typography</h3>
              <p className="mt-3 text-pretty text-lg">System fonts, strong weight contrast and readable line lengths.</p>
            </article>
            <article className="panel">
              <h3 className="heading-m">Focus</h3>
              <p className="mt-3 text-pretty text-lg">Yellow focus halo with a black outline.</p>
            </article>
            <article className="panel">
              <h3 className="heading-m">Colour</h3>
              <p className="mt-3 text-pretty text-lg">Colour has functional meaning only.</p>
            </article>
            <article className="panel">
              <h3 className="heading-m">Layout</h3>
              <p className="mt-3 text-pretty text-lg">Form and content widths are capped for readability.</p>
            </article>
          </div>
        </section>

        <section id="components" className="section-shell border-t-4">
          <div className="section-heading">
            <p className="eyebrow">Components</p>
            <h2 className="heading-l">Interface building blocks</h2>
            <p className="lead">Form controls, feedback, task lists, review screens and disclosure.</p>
          </div>

          <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,24rem),1fr))]">
            <ComponentPanel title="Buttons">
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-primary" type="button">Continue</button>
                <button className="btn btn-secondary" type="button">Save draft</button>
                <button className="btn btn-warning" type="button">Delete record</button>
              </div>
            </ComponentPanel>

            <ComponentPanel title="Text input">
              <div className="grid gap-2">
                <label className="form-label" htmlFor="membership-number">Membership number</label>
                <p className="form-hint" id="membership-number-hint">For example, M-48291</p>
                <input className="form-input w-full max-w-sm" id="membership-number" name="membership-number" aria-describedby="membership-number-hint" />
              </div>
            </ComponentPanel>

            <ComponentPanel title="Date input">
              <DateInput id="card-expiry" legend="Card expiry date" hintText="For example, 31 3 2030" />
            </ComponentPanel>

            <ComponentPanel title="Password input">
              <PasswordInput />
            </ComponentPanel>

            <ComponentPanel title="Error summary">
              <ErrorSummary errors={[['postcode', 'Enter a full postcode'], ['card-expiry-day', 'Enter your card expiry date']]} />
            </ComponentPanel>

            <ComponentPanel title="Field error">
              <div className="grid gap-2 border-l-4 border-danger pl-4">
                <label className="form-label" htmlFor="postcode">Postcode</label>
                <p className="text-lg font-bold text-danger-dark" id="postcode-error"><span className="sr-only">Error: </span>Enter a full postcode</p>
                <input className="form-input w-full max-w-xs border-danger" id="postcode" name="postcode" aria-invalid="true" aria-describedby="postcode-error" />
              </div>
            </ComponentPanel>

            <ComponentPanel title="Checkboxes">
              <fieldset className="grid gap-2">
                <legend className="form-label">What do you need?</legend>
                <ChoiceList type="checkbox" name="support" items={['Text alternatives', 'Keyboard support', 'Plain language review']} />
              </fieldset>
            </ComponentPanel>

            <ComponentPanel title="Radios">
              <fieldset className="grid gap-2">
                <legend className="form-label">Do you have an account?</legend>
                <ChoiceList type="radio" name="account" items={['Yes', 'No', 'I do not know']} />
              </fieldset>
            </ComponentPanel>

            <ComponentPanel title="Select and textarea">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label className="form-label" htmlFor="topic">Topic</label>
                  <select className="form-input w-full max-w-sm" id="topic" name="topic">
                    <option>Bookings</option>
                    <option>Billing</option>
                    <option>Membership</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label className="form-label" htmlFor="notes">Notes</label>
                  <textarea className="form-input min-h-32 w-full" id="notes" name="notes" />
                </div>
              </div>
            </ComponentPanel>

            <ComponentPanel title="File upload">
              <div className="grid gap-2">
                <label className="form-label" htmlFor="document">Upload a document</label>
                <p className="form-hint" id="document-hint">PDF, PNG or JPG</p>
                <input className="block w-full max-w-md border-2 border-ink bg-paper p-2 text-lg file:mr-4 file:border-0 file:bg-ink file:px-4 file:py-2 file:font-bold file:text-paper focus-visible:focus-ring" id="document" name="document" type="file" aria-describedby="document-hint" />
              </div>
            </ComponentPanel>

            <ComponentPanel title="Notification banner">
              <NotificationBanner>You can save this application and return to it later.</NotificationBanner>
            </ComponentPanel>

            <ComponentPanel title="Confirmation panel">
              <ConfirmationPanel heading={<h4 className="text-balance text-3xl font-bold">Application complete</h4>}>
                Reference number<br /><strong>HDJ2123F</strong>
              </ConfirmationPanel>
            </ComponentPanel>

            <ComponentPanel title="Warning text">
              <div className="flex items-center gap-4 text-xl font-bold">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-paper" aria-hidden="true">!</span>
                <p><span className="sr-only">Warning: </span>You will lose your booking if you do not pay within 7 days.</p>
              </div>
            </ComponentPanel>

            <ComponentPanel title="Details and accordion">
              <div className="divide-y-2 divide-ink border-y-2 border-ink">
                {['Where to find your membership number', 'What to do if your details change'].map((title) => (
                  <Details className="py-4" key={title} summary={title}>
                    Contact support and include the email address you signed up with.
                  </Details>
                ))}
              </div>
            </ComponentPanel>

            <ComponentPanel title="Tag and phase banner">
              <div className="flex flex-col gap-3 border-b-2 border-ink pb-4 text-lg sm:flex-row sm:items-center">
                <strong className="tag">Beta</strong>
                <span>This is a new service. Your feedback will help improve it.</span>
              </div>
            </ComponentPanel>

            <ComponentPanel title="Summary list">
              <SummaryList rows={summaryRows} changeHref="#examples" />
            </ComponentPanel>

            <ComponentPanel title="Task list">
              <ol className="divide-y-2 divide-ink border-y-2 border-ink text-lg">
                <TaskItem status="Completed" title="Personal details" />
                <TaskItem status="In progress" title="Application details" />
                <TaskItem status="Cannot start yet" title="Declaration" />
              </ol>
            </ComponentPanel>

            <ComponentPanel title="Tabs">
              <Tabs />
            </ComponentPanel>

            <ComponentPanel title="Pagination">
              <nav className="flex flex-wrap items-center gap-4 text-lg font-bold" aria-label="Pagination">
                <a className="page-link" href="#components" rel="prev">Previous</a>
                <ol className="flex gap-2">
                  <li><a className="page-link" href="#components">1</a></li>
                  <li><a className="page-link" aria-current="page" href="#components">2</a></li>
                  <li><a className="page-link" href="#components">3</a></li>
                </ol>
                <a className="page-link" href="#components" rel="next">Next</a>
              </nav>
            </ComponentPanel>

            <ComponentPanel title="Cookie banner">
              <div className="border-4 border-ink bg-mist p-5" role="region" aria-label="Cookies on this service">
                <h4 className="heading-m">Cookies on this service</h4>
                <p className="mt-3 text-lg">We use cookies to collect information about how you use this service.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="btn btn-primary" type="button">Accept cookies</button>
                  <button className="btn btn-secondary" type="button">Reject cookies</button>
                </div>
              </div>
            </ComponentPanel>
          </div>
        </section>

        <section id="examples" className="section-shell border-t-4">
          <div className="section-heading">
            <p className="eyebrow">Examples</p>
            <h2 className="heading-l">Example apps</h2>
            <p className="lead">Small apps built with the system. Open one and click through it.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exampleApps.map((app) => (
              <article className="panel" key={app.path}>
                <h3 className="heading-m"><a className="link" href={app.path}>{app.title}</a></h3>
                <p className="mt-3 text-pretty text-lg">{app.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <a className="btn btn-primary" href="#/examples">Browse all examples</a>
          </div>
        </section>

        <section id="patterns" className="section-shell border-t-4">
          <div className="section-heading">
            <p className="eyebrow">Patterns</p>
            <h2 className="heading-l">Page patterns</h2>
          </div>
          <div className="grid border-4 border-ink md:grid-cols-3 [&_article+article]:border-t-4 [&_article+article]:border-ink [&_article]:p-5 md:[&_article+article]:border-l-4 md:[&_article+article]:border-t-0">
            <article>
              <h3 className="heading-m">Ask one thing at a time</h3>
              <p>Single-question pages are easier to answer and validate.</p>
            </article>
            <article>
              <h3 className="heading-m">Check before submit</h3>
              <p>Summary lists show captured data and change links.</p>
            </article>
            <article>
              <h3 className="heading-m">Confirm completion</h3>
              <p>Confirmation pages show references and next steps.</p>
            </article>
          </div>
        </section>

        <section id="accessibility" className="section-shell border-t-4">
          <div className="section-heading">
            <p className="eyebrow">Accessibility</p>
            <h2 className="heading-l">Accessibility notes</h2>
          </div>
          <ul className="grid gap-4 text-xl leading-relaxed [&_li]:border-l-4 [&_li]:border-ink [&_li]:pl-4">
            <li><strong>Responsive grids:</strong> layouts adapt without hiding labels or actions.</li>
            <li><strong><code>:focus-visible</code>:</strong> keyboard users get a high-contrast yellow focus treatment.</li>
            <li><strong>Native controls:</strong> checkboxes, radios, file inputs and selects keep platform affordances.</li>
            <li><strong><code>text-wrap</code>:</strong> headings and paragraphs keep readable shapes.</li>
            <li><strong>Semantic colour:</strong> green is only for success, red for errors and destructive actions, blue for information, yellow for focus.</li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

function ComponentPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="panel">
      <h3 className="heading-m">{title}</h3>
      <div className="mt-5">{children}</div>
    </article>
  )
}

function Tabs() {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function selectTab(index: number) {
    const next = (index + tabs.length) % tabs.length
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div>
      <div className="flex flex-wrap border-b-2 border-ink" role="tablist" aria-label="Service sections">
        {tabs.map(([tabId, tabLabel], index) => {
          const isSelected = selected === index

          return (
            <button
              aria-controls={`tab-panel-${tabId}`}
              aria-selected={isSelected}
              className={isSelected ? 'border-x-2 border-t-2 border-ink bg-paper px-4 py-3 font-bold focus-visible:focus-ring' : 'border-x-2 border-t-2 border-transparent px-4 py-3 font-bold underline focus-visible:focus-ring'}
              id={`tab-${tabId}`}
              key={tabId}
              onKeyDown={(event) => {
                const keyActions: Record<string, number> = {
                  ArrowLeft: selected - 1,
                  ArrowRight: selected + 1,
                  Home: 0,
                  End: tabs.length - 1,
                }
                const next = keyActions[event.key]
                if (next === undefined) return
                event.preventDefault()
                selectTab(next)
              }}
              onClick={() => setSelected(index)}
              ref={(element) => { tabRefs.current[index] = element }}
              role="tab"
              tabIndex={isSelected ? 0 : -1}
              type="button"
            >
              {tabLabel}
            </button>
          )
        })}
      </div>
      {tabs.map(([tabId, , body], index) => (
        <div
          className="border-x-2 border-b-2 border-ink p-4 focus-visible:focus-ring"
          hidden={selected !== index}
          id={`tab-panel-${tabId}`}
          key={tabId}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${tabId}`}
        >
          <p>{body}</p>
        </div>
      ))}
    </div>
  )
}

function TaskItem({ title, status }: { title: string; status: 'Completed' | 'In progress' | 'Cannot start yet' }) {
  const cannotStart = status === 'Cannot start yet'

  return (
    <li className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
      {cannotStart ? <span className="font-bold text-rule">{title}</span> : <a className="link" href="#examples">{title}</a>}
      {status === 'Completed' ? <strong>{status}</strong> : <strong className={cannotStart ? 'tag-muted' : 'tag'}>{status}</strong>}
    </li>
  )
}

export default Home
