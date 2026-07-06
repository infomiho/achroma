import { ExampleShell } from '../ExampleShell'
import { posts } from './posts'

function BlogListPage() {
  return (
    <ExampleShell exampleTitle="Blog: post listing" serviceName="Meadow blog" serviceHref="#/examples/blog" phaseBanner={false}>
      <div className="max-w-3xl">
        <h1 className="heading-xl">Latest updates</h1>
        <p className="lead mt-4">News from the Meadow team.</p>

        <div className="mt-8 divide-y-2 divide-ink border-y-2 border-ink">
          {posts.map((post) => (
            <article className="py-6" key={post.title}>
              <h2 className="heading-m"><a className="link" href="#/examples/blog/article">{post.title}</a></h2>
              <p className="mt-2 text-lg leading-7">{post.summary}</p>
              <p className="form-hint mt-3">{post.meta}</p>
            </article>
          ))}
        </div>

        <nav className="mt-8 flex flex-wrap items-center gap-4 text-lg font-bold" aria-label="Pagination">
          <ol className="flex gap-2">
            <li><a className="page-link" aria-current="page" href="#/examples/blog">1</a></li>
            <li><a className="page-link" href="#/examples/blog">2</a></li>
            <li><a className="page-link" href="#/examples/blog">3</a></li>
          </ol>
          <a className="page-link" href="#/examples/blog" rel="next">Next</a>
        </nav>
      </div>
    </ExampleShell>
  )
}

export default BlogListPage
