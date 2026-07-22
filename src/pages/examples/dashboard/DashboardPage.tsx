import { NotificationBanner } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { MeadowAccountMenu } from '../MeadowAccountMenu'
import { meadowNav } from '../meadow'

const stats = [
  ['Bookings this month', '24', 'Up 4 on June'],
  ['Studio occupancy', '82%', 'Up 6 points on June'],
  ['Day passes left', '8', 'Renews on 1 August'],
  ['Invoices due', '1', '£120 outstanding'],
] as const

const recentActivity = [
  ['Today, 09:12', 'Booking BK-2143 requested for the recording booth'],
  ['Yesterday', 'Invoice INV-0341 issued for your July membership'],
  ['1 July', 'Booking BK-2098 confirmed for meeting room B'],
  ['28 June', 'Two day passes used at the North studio'],
] as const

const recentBookings = [
  ['BK-2143', 'Recording booth', '28 July 2026', 'Pending'],
  ['BK-2098', 'Meeting room B', '21 July 2026', 'Confirmed'],
  ['BK-2071', 'Desk 3, Riverside studio', '17 July 2026', 'Confirmed'],
  ['BK-1994', 'Rehearsal room', '15 July 2026', 'Payment due'],
  ['BK-1877', 'Desk 12, North studio', '14 July 2026', 'Confirmed'],
] as const

type BookingStatus = (typeof recentBookings)[number][3]

const statusTagClass: Record<BookingStatus, string> = {
  'Confirmed': 'tag',
  'Pending': 'tag-muted',
  'Payment due': 'tag-danger',
}

function DashboardPage() {
  return (
    <ExampleShell exampleTitle="Dashboard" serviceName="Meadow" serviceHref="#/examples/dashboard" nav={meadowNav} account={<MeadowAccountMenu />}>
      <div className="space-y-8">
        <NotificationBanner>The Riverside studio closes at 15:00 on Friday 24 July for maintenance.</NotificationBanner>

        <div>
          <p className="text-xl text-rule">Amina Patel</p>
          <h1 className="heading-xl mt-1">Overview</h1>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([statLabel, value, change]) => (
            <li className="panel" key={statLabel}>
              <p className="text-lg font-bold">{statLabel}</p>
              <p className="mt-2 text-5xl font-bold tabular-nums">{value}</p>
              <p className="form-hint mt-2">{change}</p>
            </li>
          ))}
        </ul>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2" aria-labelledby="recent-bookings-heading">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="heading-m" id="recent-bookings-heading">Recent bookings</h2>
              <a className="link" href="#/examples/bookings">View all bookings</a>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-y-2 border-ink text-left text-lg">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="py-3 pr-4" scope="col">Reference</th>
                    <th className="py-3 pr-4" scope="col">Space</th>
                    <th className="py-3 pr-4" scope="col">Date</th>
                    <th className="py-3" scope="col">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-ink">
                  {recentBookings.map(([reference, space, date, status]) => (
                    <tr key={reference}>
                      <td className="py-3 pr-4 font-bold">{reference}</td>
                      <td className="py-3 pr-4">{space}</td>
                      <td className="whitespace-nowrap py-3 pr-4">{date}</td>
                      <td className="py-3"><strong className={statusTagClass[status]}>{status}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="lg:border-l-4 lg:border-ink lg:pl-6" aria-labelledby="activity-heading">
            <h2 className="heading-m" id="activity-heading">Recent activity</h2>
            <ol className="mt-2 divide-y-2 divide-ink">
              {recentActivity.map(([when, event]) => (
                <li className="py-3" key={event}>
                  <p className="form-hint">{when}</p>
                  <p className="mt-1 text-lg">{event}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </ExampleShell>
  )
}

export default DashboardPage
