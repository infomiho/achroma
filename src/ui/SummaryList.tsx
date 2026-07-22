export type SummaryRow = readonly [string, string]

export function SummaryList({ rows, changeHref }: { rows: readonly SummaryRow[]; changeHref: string }) {
  return (
    <dl className="@container divide-y-2 divide-ink border-y-2 border-ink text-lg">
      {rows.map(([term, value]) => (
        <div className="grid gap-1 py-4 @md:grid-cols-[minmax(8rem,12rem)_1fr_auto] @md:gap-2" key={term}>
          <dt className="font-bold">{term}</dt>
          <dd className="wrap-anywhere">{value}</dd>
          <dd><a className="link" href={changeHref}>Change<span className="sr-only"> {term.toLowerCase()}</span></a></dd>
        </div>
      ))}
    </dl>
  )
}
