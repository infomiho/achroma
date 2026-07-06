export type ExampleMeta = {
  path: string
  title: string
  description: string
  showcases?: string
}

export const exampleApps: readonly ExampleMeta[] = [
  {
    path: '#/examples/dashboard',
    title: 'Dashboard',
    description: 'A signed-in overview with key stats, latest bookings and recent activity.',
    showcases: 'Stat panels, table, tags, activity feed, service navigation',
  },
  {
    path: '#/examples/bookings',
    title: 'Bookings',
    description: 'A data table with working search, a status filter and an empty state.',
    showcases: 'Search input, select, data table, tags, pagination',
  },
  {
    path: '#/examples/settings',
    title: 'Settings',
    description: 'Profile and notification preferences with a danger zone.',
    showcases: 'Form layouts, section navigation, success banner, warning button',
  },
  {
    path: '#/examples/sign-in',
    title: 'Sign in',
    description: 'Email and password with working validation, then a security code step.',
    showcases: 'Text inputs, password reveal, error summary, field errors',
  },
  {
    path: '#/examples/membership/start',
    title: 'Membership application',
    description: 'A four-page journey: start, one question at a time, check your answers, confirmation.',
    showcases: 'Start button, radios, summary list, confirmation panel',
  },
]

export const errorPages: readonly ExampleMeta[] = [
  {
    path: '#/examples/page-not-found',
    title: 'Page not found',
    description: 'Shown for broken links and mistyped addresses.',
  },
]
