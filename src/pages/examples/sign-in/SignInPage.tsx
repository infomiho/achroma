import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Details, ErrorSummary, PasswordInput } from '../../../ui'
import { ExampleShell } from '../ExampleShell'

type FieldErrors = { email?: string; password?: string }

const emailPattern = /^\S+@\S+\.\S+$/

function SignInPage() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const hasErrors = Boolean(errors.email || errors.password)

  useEffect(() => {
    if (hasErrors) errorSummaryRef.current?.focus()
  }, [errors, hasErrors])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get('email') ?? '').trim()
    const password = String(data.get('password') ?? '')
    const nextErrors: FieldErrors = {}
    if (!email) nextErrors.email = 'Enter your email address'
    else if (!emailPattern.test(email)) nextErrors.email = 'Enter an email address in the correct format, like name@example.com'
    if (!password) nextErrors.password = 'Enter your password'
    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors)
      return
    }
    window.location.hash = '#/examples/sign-in/security-code'
  }

  const summaryErrors = [
    ...(errors.email ? [['email', errors.email] as const] : []),
    ...(errors.password ? [['password', errors.password] as const] : []),
  ]

  return (
    <ExampleShell exampleTitle="Sign in: email and password" serviceName="Meadow" serviceHref="#/examples/sign-in">
      <div className="max-w-2xl space-y-7">
        <ErrorSummary errors={summaryErrors} ref={errorSummaryRef} />

        <h1 className="heading-xl">Sign in to your Meadow account</h1>

        <form className="space-y-7" onSubmit={handleSubmit} noValidate>
          <div className={errors.email ? 'grid gap-2 border-l-4 border-danger pl-4' : 'grid gap-2'}>
            <label className="form-label" htmlFor="email">Email address</label>
            {errors.email && (
              <p className="text-lg font-bold text-danger-dark" id="email-error"><span className="sr-only">Error: </span>{errors.email}</p>
            )}
            <input
              className={errors.email ? 'form-input w-full max-w-md border-danger' : 'form-input w-full max-w-md'}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </div>

          <PasswordInput error={errors.password} />

          <button className="btn btn-primary" type="submit">Sign in</button>
        </form>

        <Details summary="I cannot sign in">
          If you have forgotten your password or no longer use the email address you registered with, ask at reception or contact support.
        </Details>
      </div>
    </ExampleShell>
  )
}

export default SignInPage
