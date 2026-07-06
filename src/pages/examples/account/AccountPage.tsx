import { Details, NotificationBanner } from '../../../ui'
import { ExampleShell } from '../ExampleShell'

const stats = [
  ['2', 'Upcoming bookings'],
  ['8', 'Day passes left'],
  ['1', 'Invoice due'],
] as const

const accountRows = [
  ['BK-1877', 'Desk 12, North studio', '14 July 2026', 'Confirmed'],
  ['BK-2098', 'Meeting room B', '21 July 2026', 'Confirmed'],
  ['BK-2143', 'Recording booth', '28 July 2026', 'Pending'],
  ['INV-0341', 'Monthly membership', '2 July 2026', 'Payment due'],
] as const

type RowStatus = (typeof accountRows)[number][3]

const statusTagClass: Record<RowStatus, string> = {
  'Confirmed': 'tag',
  'Pending': 'tag-muted',
  'Payment due': 'tag-danger',
}

const nav = [
  ['Your bookings', '#/examples/account'],
  ['Sign out', '#/examples/sign-in'],
] as const

function AccountPage() {
  return (
    <ExampleShell exampleTitle="Account dashboard" serviceName="Meadow" serviceHref="#/examples/account" nav={nav}>
      <div className="space-y-8">
        <NotificationBanner>The Riverside studio closes at 15:00 on Friday 24 July for maintenance.</NotificationBanner>

        <div>
          <p className="text-xl text-rule">Amina Patel</p>
          <h1 className="heading-xl mt-1">Your bookings</h1>
        </div>

        <ul className="grid gap-6 sm:grid-cols-3">
          {stats.map(([value, statLabel]) => (
            <li className="panel" key={statLabel}>
              <p className="text-5xl font-bold">{value}</p>
              <p className="mt-2 text-lg font-bold">{statLabel}</p>
            </li>
          ))}
        </ul>

        <section>
          <h2 className="heading-m">Bookings and invoices</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-y-2 border-ink text-left text-lg">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="py-3 pr-4" scope="col">Reference</th>
                  <th className="py-3 pr-4" scope="col">Item</th>
                  <th className="py-3 pr-4" scope="col">Date</th>
                  <th className="py-3 pr-4" scope="col">Status</th>
                  <th className="py-3" scope="col"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink">
                {accountRows.map(([reference, item, date, status]) => (
                  <tr key={reference}>
                    <td className="py-3 pr-4 font-bold">{reference}</td>
                    <td className="py-3 pr-4">{item}</td>
                    <td className="py-3 pr-4">{date}</td>
                    <td className="py-3 pr-4"><strong className={statusTagClass[status]}>{status}</strong></td>
                    <td className="py-3">
                      <a className="link" href="#/examples/account">
                        {status === 'Payment due' ? 'Pay' : 'View'}<span className="sr-only"> {reference}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Details className="max-w-2xl" summary="How to change a booking">
          You can change or cancel a booking up to 24 hours before it starts. Later than that, the booking uses one of your day passes.
        </Details>
      </div>
    </ExampleShell>
  )
}

export default AccountPage
