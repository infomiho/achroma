import { useState } from 'react'
import { Details } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { meadowNav } from '../meadow'

const statuses = ['Confirmed', 'Pending', 'Payment due'] as const

type BookingStatus = (typeof statuses)[number]
type Booking = readonly [string, string, string, BookingStatus]

const bookings: readonly Booking[] = [
  ['BK-2143', 'Recording booth', '28 July 2026', 'Pending'],
  ['BK-2098', 'Meeting room B', '21 July 2026', 'Confirmed'],
  ['BK-2071', 'Desk 3, Riverside studio', '17 July 2026', 'Confirmed'],
  ['BK-1994', 'Rehearsal room', '15 July 2026', 'Payment due'],
  ['BK-1877', 'Desk 12, North studio', '14 July 2026', 'Confirmed'],
  ['BK-1802', 'Photography studio', '10 July 2026', 'Confirmed'],
  ['BK-1730', 'Meeting room A', '8 July 2026', 'Pending'],
  ['BK-1688', 'Desk 12, North studio', '7 July 2026', 'Confirmed'],
  ['BK-1573', 'Recording booth', '30 June 2026', 'Confirmed'],
  ['BK-1450', 'Workshop bench 2', '26 June 2026', 'Confirmed'],
]

const statusTagClass: Record<BookingStatus, string> = {
  'Confirmed': 'tag',
  'Pending': 'tag-muted',
  'Payment due': 'tag-danger',
}

function BookingsPage() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All')

  const visibleBookings = bookings.filter(([reference, space, , bookingStatus]) => {
    const matchesQuery = `${reference} ${space}`.toLowerCase().includes(query.trim().toLowerCase())
    const matchesStatus = status === 'All' || bookingStatus === status
    return matchesQuery && matchesStatus
  })

  function clearFilters() {
    setQuery('')
    setStatus('All')
  }

  return (
    <ExampleShell exampleTitle="Bookings: data table" serviceName="Meadow" serviceHref="#/examples/dashboard" nav={meadowNav}>
      <div className="space-y-8">
        <h1 className="heading-xl">Bookings</h1>

        <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
          <div className="grid gap-2">
            <label className="form-label" htmlFor="search">Search</label>
            <p className="form-hint" id="search-hint">Reference or space, like BK-2098</p>
            <input
              className="form-input w-80 max-w-full"
              id="search"
              type="search"
              aria-describedby="search-hint"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label className="form-label" htmlFor="status">Status</label>
            <select className="form-input" id="status" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="All">All statuses</option>
              {statuses.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-lg font-bold" aria-live="polite">
          Showing {visibleBookings.length} of {bookings.length} bookings
        </p>

        {visibleBookings.length === 0 ? (
          <div className="panel max-w-2xl">
            <p className="text-xl font-bold">No bookings match your filters.</p>
            <button className="btn btn-secondary mt-5" type="button" onClick={clearFilters}>Clear filters</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-y-2 border-ink text-left text-lg">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="py-3 pr-4" scope="col">Reference</th>
                  <th className="py-3 pr-4" scope="col">Space</th>
                  <th className="py-3 pr-4" scope="col">Date</th>
                  <th className="py-3 pr-4" scope="col">Status</th>
                  <th className="py-3" scope="col"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-ink">
                {visibleBookings.map(([reference, space, date, bookingStatus]) => (
                  <tr key={reference}>
                    <td className="py-3 pr-4 font-bold">{reference}</td>
                    <td className="py-3 pr-4">{space}</td>
                    <td className="py-3 pr-4">{date}</td>
                    <td className="py-3 pr-4"><strong className={statusTagClass[bookingStatus]}>{bookingStatus}</strong></td>
                    <td className="py-3">
                      <a className="link" href="#/examples/bookings">
                        {bookingStatus === 'Payment due' ? 'Pay' : 'View'}<span className="sr-only"> {reference}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <nav className="flex flex-wrap items-center gap-4 text-lg font-bold" aria-label="Pagination">
          <ol className="flex gap-2">
            <li><a className="page-link" aria-current="page" href="#/examples/bookings">1</a></li>
            <li><a className="page-link" href="#/examples/bookings">2</a></li>
            <li><a className="page-link" href="#/examples/bookings">3</a></li>
          </ol>
          <a className="page-link" href="#/examples/bookings" rel="next">Next</a>
        </nav>

        <Details className="max-w-2xl" summary="How to change a booking">
          You can change or cancel a booking up to 24 hours before it starts. Later than that, the booking uses one of your day passes.
        </Details>
      </div>
    </ExampleShell>
  )
}

export default BookingsPage
