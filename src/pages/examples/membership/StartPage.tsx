import { StartArrow } from '../../../ui'
import { ExampleShell } from '../ExampleShell'

function StartPage() {
  return (
    <ExampleShell exampleTitle="Membership application: start page" serviceName="Meadow" serviceHref="#/examples/membership/start">
      <div className="max-w-2xl space-y-6">
        <h1 className="heading-xl">Apply for a studio membership</h1>
        <p className="lead">You get a decision straight away.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg">
          <li>takes about 10 minutes</li>
          <li>you need a payment card</li>
        </ul>
        <a className="btn btn-primary" href="#/examples/membership/question">
          Start now
          <StartArrow />
        </a>
        <h2 className="heading-m pt-4">Before you start</h2>
        <p className="text-lg leading-7">You cannot save your progress. If you stop, you will need to start again.</p>
      </div>
    </ExampleShell>
  )
}

export default StartPage
