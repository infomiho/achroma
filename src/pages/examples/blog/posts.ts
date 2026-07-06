export type BlogPost = {
  title: string
  summary: string
  meta: string
}

export const posts: readonly BlogPost[] = [
  {
    title: 'Studio bookings are now instant',
    summary: 'Most bookings are confirmed straight away, instead of waiting for a manager to approve them.',
    meta: 'Product update, 24 June 2026',
  },
  {
    title: 'What we learned testing with screen reader users',
    summary: 'Five rounds of research changed how we structure forms and error messages.',
    meta: 'Accessibility, 10 June 2026',
  },
  {
    title: 'One question per page: why it works',
    summary: 'Shorter forms get finished more often, especially on mobile.',
    meta: 'Design, 28 May 2026',
  },
]

export const featuredPost = posts[0]
