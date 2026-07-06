import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ChoiceList, ErrorSummary } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { getVisitsAnswer, setVisitsAnswer } from './answers'

function QuestionPage() {
  const [error, setError] = useState('')
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (error) errorSummaryRef.current?.focus()
  }, [error])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const visits = new FormData(event.currentTarget).get('visits')
    if (!visits) {
      setError('Select how often you will use the studio')
      return
    }
    setVisitsAnswer(String(visits))
    window.location.hash = '#/examples/membership/check-answers'
  }

  return (
    <ExampleShell exampleTitle="Membership application: question page" serviceName="Meadow" serviceHref="#/examples/membership/start">
      <a className="link" href="#/examples/membership/start">Back</a>
      <div className="mt-6 max-w-2xl space-y-7">
        <ErrorSummary errors={error ? [['visits-0', error]] : []} ref={errorSummaryRef} />
        <form className="space-y-7" onSubmit={handleSubmit} noValidate>
          <fieldset className={error ? 'grid gap-4 border-l-4 border-danger pl-4' : 'grid gap-4'} aria-describedby={error ? 'visits-error' : undefined}>
            <legend>
              <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">How often will you use the studio?</h1>
            </legend>
            {error && (
              <p className="text-lg font-bold text-danger-dark" id="visits-error"><span className="sr-only">Error: </span>{error}</p>
            )}
            <ChoiceList type="radio" name="visits" items={['Most days', 'A few times a week', 'A few times a month', 'Not sure yet']} defaultValue={getVisitsAnswer() ?? undefined} />
          </fieldset>
          <button className="btn btn-primary" type="submit">Continue</button>
        </form>
      </div>
    </ExampleShell>
  )
}

export default QuestionPage
