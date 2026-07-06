export type ExampleMeta = {
  path: string
  title: string
  description: string
  showcases?: string
}

export const exampleApps: readonly ExampleMeta[] = [
  {
    path: '#/examples/membership/start',
    title: 'Membership application',
    description: 'A four-page journey: start, one question at a time, check your answers, confirmation.',
    showcases: 'Start button, radios, summary list, confirmation panel',
  },
  {
    path: '#/examples/sign-in',
    title: 'Sign in',
    description: 'Email and password with working validation, then a security code step.',
    showcases: 'Text inputs, password reveal, error summary, field errors',
  },
  {
    path: '#/examples/account',
    title: 'Account dashboard',
    description: 'A signed-in overview of bookings and invoices.',
    showcases: 'Notification banner, stat panels, table, tags, service navigation',
  },
  {
    path: '#/examples/blog',
    title: 'Blog',
    description: 'A post listing and an article page.',
    showcases: 'Typography, metadata, blockquote, pagination',
  },
]

export const errorPages: readonly ExampleMeta[] = [
  {
    path: '#/examples/page-not-found',
    title: 'Page not found',
    description: 'Shown for broken links and mistyped addresses.',
  },
]
