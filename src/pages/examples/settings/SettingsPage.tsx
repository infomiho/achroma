import { useEffect, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { ChoiceList, NotificationBanner } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { meadowNav } from '../meadow'

const sections = [
  ['profile', 'Profile'],
  ['notifications', 'Notifications'],
  ['delete-account', 'Delete your account'],
] as const

function jumpToSection(event: MouseEvent, id: string) {
  event.preventDefault()
  const section = document.getElementById(id)
  section?.scrollIntoView()
  section?.focus()
}

function SettingsPage() {
  const [savedMessage, setSavedMessage] = useState('')
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (savedMessage) bannerRef.current?.focus()
  }, [savedMessage])

  function saveWith(message: string) {
    return (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setSavedMessage(message)
    }
  }

  return (
    <ExampleShell exampleTitle="Settings" serviceName="Meadow" serviceHref="#/examples/dashboard" nav={meadowNav}>
      <div className="space-y-8">
        {savedMessage && (
          <NotificationBanner variant="success" ref={bannerRef}>{savedMessage}</NotificationBanner>
        )}

        <h1 className="heading-xl">Settings</h1>

        <div className="gap-10 lg:grid lg:grid-cols-[15rem_1fr]">
          <nav aria-label="Settings sections">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg font-bold lg:flex-col lg:gap-4 lg:border-l-4 lg:border-ink lg:pl-4">
              {sections.map(([id, sectionLabel]) => (
                <li key={id}>
                  <a className="underline hover:decoration-4 focus-visible:focus-ring" href={`#${id}`} onClick={(event) => jumpToSection(event, id)}>
                    {sectionLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 max-w-2xl space-y-10 lg:mt-0">
            <section className="outline-none" id="profile" tabIndex={-1} aria-labelledby="profile-heading">
              <h2 className="heading-m" id="profile-heading">Profile</h2>
              <form className="mt-5 space-y-6" onSubmit={saveWith('Your profile has been updated.')} noValidate>
                <div className="grid gap-2">
                  <label className="form-label" htmlFor="full-name">Full name</label>
                  <input className="form-input w-full max-w-md" id="full-name" name="full-name" defaultValue="Amina Patel" autoComplete="name" />
                </div>
                <div className="grid gap-2">
                  <label className="form-label" htmlFor="email">Email address</label>
                  <p className="form-hint" id="email-hint">We use this for booking confirmations and receipts.</p>
                  <input
                    className="form-input w-full max-w-md"
                    id="email"
                    name="email"
                    type="email"
                    defaultValue="amina.patel@example.com"
                    autoComplete="email"
                    aria-describedby="email-hint"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="form-label" htmlFor="home-studio">Home studio</label>
                  <select className="form-input w-full max-w-md" id="home-studio" name="home-studio" defaultValue="North studio">
                    <option>North studio</option>
                    <option>Riverside studio</option>
                    <option>Docklands studio</option>
                  </select>
                </div>
                <button className="btn btn-primary" type="submit">Save profile</button>
              </form>
            </section>

            <section className="border-t-2 border-ink pt-8 outline-none" id="notifications" tabIndex={-1} aria-labelledby="notifications-heading">
              <h2 className="heading-m" id="notifications-heading">Notifications</h2>
              <form className="mt-5 space-y-6" onSubmit={saveWith('Your notification preferences have been saved.')} noValidate>
                <fieldset className="grid gap-3">
                  <legend className="form-label">Booking reminders</legend>
                  <p className="form-hint">Sent the day before a booking starts.</p>
                  <ChoiceList type="radio" name="reminders" items={['Email', 'Text message', 'No reminders']} defaultValue="Email" />
                </fieldset>
                <fieldset className="grid gap-3">
                  <legend className="form-label">Emails about</legend>
                  <ChoiceList type="checkbox" name="emails-about" items={['Product updates', 'Billing and receipts', 'Community events']} defaultValue="Billing and receipts" />
                </fieldset>
                <button className="btn btn-primary" type="submit">Save preferences</button>
              </form>
            </section>

            <section className="border-4 border-danger p-5 outline-none" id="delete-account" tabIndex={-1} aria-labelledby="delete-heading">
              <h2 className="heading-m" id="delete-heading">Delete your account</h2>
              <p className="mt-3 text-lg">Your bookings and invoices are removed after 30 days. This cannot be undone.</p>
              {confirmingDelete ? (
                <div className="mt-5 space-y-4">
                  <p className="text-lg font-bold">Are you sure you want to delete your account?</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="btn btn-warning" type="button" onClick={() => { window.location.hash = '#/examples/sign-in' }}>
                      Yes, delete my account
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={() => setConfirmingDelete(false)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <button className="btn btn-warning mt-5" type="button" onClick={() => setConfirmingDelete(true)}>Delete account</button>
              )}
            </section>
          </div>
        </div>
      </div>
    </ExampleShell>
  )
}

export default SettingsPage
