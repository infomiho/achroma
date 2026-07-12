import { ExampleShell } from './ExampleShell'

function PageNotFound() {
  return (
    <ExampleShell exampleTitle="Page not found" phaseBanner={false}>
      <div className="max-w-2xl space-y-6">
        <h1 className="heading-xl">Page not found</h1>
        <p className="text-lg">If you typed the web address, check it is correct.</p>
        <p className="text-lg">If you pasted the web address, check you copied the entire address.</p>
        <p className="text-lg">
          You can <a className="link" href="#/examples">browse all example apps</a> or go back to the <a className="link" href="#/">design system home page</a>.
        </p>
      </div>
    </ExampleShell>
  )
}

export default PageNotFound
