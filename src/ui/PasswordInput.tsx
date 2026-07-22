import { useState } from 'react'

export function PasswordInput({ error }: { error?: string }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className={error ? 'grid gap-2 border-l-4 border-danger pl-4' : 'grid gap-2'}>
      <label className="form-label" htmlFor="password">Password</label>
      {error && (
        <p className="text-lg font-bold text-danger-dark" id="password-error"><span className="sr-only">Error: </span>{error}</p>
      )}
      <div className="flex max-w-md gap-2">
        <input
          className={error ? 'form-input w-full border-danger' : 'form-input w-full'}
          id="password"
          name="password"
          type={revealed ? 'text' : 'password'}
          autoComplete="current-password"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'password-error' : undefined}
        />
        <button className="btn btn-secondary" type="button" aria-controls="password" onClick={() => setRevealed((current) => !current)}>
          {revealed ? 'Hide' : 'Show'}<span className="sr-only"> password</span>
        </button>
      </div>
      <span aria-live="polite" className="sr-only">{revealed ? 'Your password is visible' : 'Your password is hidden'}</span>
    </div>
  )
}
