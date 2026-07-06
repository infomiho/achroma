import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Details, ErrorSummary } from '../../../ui'
import { ExampleShell } from '../ExampleShell'

const codePattern = /^\d{6}$/

function SecurityCodePage() {
  const [error, setError] = useState('')
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (error) errorSummaryRef.current?.focus()
  }, [error])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const code = String(new FormData(event.currentTarget).get('security-code') ?? '').trim()
    if (!codePattern.test(code)) {
      setError('Enter the 6-digit security code')
      return
    }
    window.location.hash = '#/examples/dashboard'
  }

  return (
    <ExampleShell exampleTitle="Sign in: security code" serviceName="Meadow" serviceHref="#/examples/sign-in">
      <a className="link" href="#/examples/sign-in">Back</a>
      <div className="mt-6 max-w-2xl space-y-7">
        <ErrorSummary errors={error ? [['security-code', error]] : []} ref={errorSummaryRef} />
        <form className="space-y-7" onSubmit={handleSubmit} noValidate>
          <div className="space-y-3">
            <h1 className="heading-xl">Check your phone</h1>
            <p className="text-lg leading-7">We sent a 6-digit security code to <strong>07700 900457</strong>. It expires in 15 minutes.</p>
          </div>
          <div className={error ? 'grid gap-2 border-l-4 border-danger pl-4' : 'grid gap-2'}>
            <label className="form-label" htmlFor="security-code">Security code</label>
            {error && (
              <p className="text-lg font-bold text-danger-dark" id="security-code-error"><span className="sr-only">Error: </span>{error}</p>
            )}
            <input
              className={error ? 'form-input w-32 border-danger' : 'form-input w-32'}
              id="security-code"
              name="security-code"
              inputMode="numeric"
              autoComplete="one-time-code"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? 'security-code-error' : undefined}
            />
          </div>
          <button className="btn btn-primary" type="submit">Continue</button>
        </form>
        <Details summary="I did not get a code">
          It can take a few minutes to arrive. If your phone number has changed, contact support to update it.
        </Details>
      </div>
    </ExampleShell>
  )
}

export default SecurityCodePage
