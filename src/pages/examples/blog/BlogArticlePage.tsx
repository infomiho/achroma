import { ExampleShell } from '../ExampleShell'
import { featuredPost } from './posts'

function BlogArticlePage() {
  return (
    <ExampleShell exampleTitle="Blog: article" serviceName="Meadow blog" serviceHref="#/examples/blog" phaseBanner={false}>
      <div className="max-w-2xl space-y-6">
        <a className="link" href="#/examples/blog">Back to all updates</a>
        <div className="space-y-3">
          <p className="eyebrow text-rule">Product update</p>
          <h1 className="heading-xl">{featuredPost.title}</h1>
          <p className="form-hint">Sana Osei, 24 June 2026</p>
        </div>

        <p className="lead">{featuredPost.summary}</p>

        <p className="text-lg leading-8">
          Until this spring, every booking was approved by hand. We looked at a year of bookings with the studio managers and found that
          almost every request was approved unchanged. Removing the approval step for standard bookings cut the wait from hours to seconds.
        </p>

        <blockquote className="border-l-4 border-ink pl-4 text-xl leading-8">
          <p>I booked a meeting room from the bus and it was confirmed before my stop.</p>
          <footer className="form-hint mt-2">Member, research session in May</footer>
        </blockquote>

        <h2 className="heading-m">What changed</h2>
        <ul className="list-disc space-y-2 pl-6 text-lg">
          <li>standard bookings are confirmed instantly</li>
          <li>bookings that need a manager, like whole-floor hires, are flagged automatically</li>
          <li>you get a confirmation email straight away instead of the next morning</li>
        </ul>

        <h2 className="heading-m">What is next</h2>
        <p className="text-lg leading-8">
          We are working on repeat bookings. You will be able to book your usual desk for every week in one go.
        </p>
      </div>
    </ExampleShell>
  )
}

export default BlogArticlePage
