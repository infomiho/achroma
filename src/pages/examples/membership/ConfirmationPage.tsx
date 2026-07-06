import { useEffect } from 'react'
import { ConfirmationPanel } from '../../../ui'
import { ExampleShell } from '../ExampleShell'
import { clearVisitsAnswer } from './answers'

function ConfirmationPage() {
  useEffect(() => {
    clearVisitsAnswer()
  }, [])

  return (
    <ExampleShell exampleTitle="Membership application: confirmation" serviceName="Meadow" serviceHref="#/examples/membership/start">
      <div className="max-w-2xl space-y-6">
        <ConfirmationPanel heading={<h1 className="text-balance text-3xl font-bold sm:text-4xl">Membership confirmed</h1>}>
          Your membership number<br /><strong>M-48291</strong>
        </ConfirmationPanel>
        <p className="text-lg leading-7">We have sent you a confirmation email.</p>
        <h2 className="heading-m">What happens next</h2>
        <p className="text-lg leading-7">Collect your key fob at reception on your first visit. You can book straight away.</p>
        <p className="text-lg leading-7"><a className="link" href="#/examples">What did you think of this service?</a></p>
      </div>
    </ExampleShell>
  )
}

export default ConfirmationPage
