import type { FormEvent } from 'react'
import { SummaryList } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { getVisitsAnswer } from './answers'

function CheckAnswersPage() {
  const visits = getVisitsAnswer() ?? 'Not answered'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    window.location.hash = '#/examples/membership/confirmation'
  }

  return (
    <ExampleShell exampleTitle="Membership application: check answers" serviceName="Meadow" serviceHref="#/examples/membership/start">
      <a className="link" href="#/examples/membership/question">Back</a>
      <div className="mt-6 max-w-2xl space-y-8">
        <h1 className="heading-xl">Check your answers before sending your application</h1>
        <section>
          <h2 className="heading-m mb-3">Your answers</h2>
          <SummaryList rows={[['Studio use', visits]]} changeHref="#/examples/membership/question" />
        </section>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="heading-m">Now send your application</h2>
          <p className="text-lg">By sending this application you confirm your answers are correct.</p>
          <button className="btn btn-primary" type="submit">Accept and send</button>
        </form>
      </div>
    </ExampleShell>
  )
}

export default CheckAnswersPage
