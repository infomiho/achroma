const dateParts = [
  ['day', 'Day', 'w-16'],
  ['month', 'Month', 'w-16'],
  ['year', 'Year', 'w-24'],
] as const

export function DateInput({ id, legend, hintText }: { id: string; legend: string; hintText: string }) {
  return (
    <fieldset className="grid gap-3" role="group" aria-describedby={`${id}-hint`}>
      <legend className="form-label">{legend}</legend>
      <p className="form-hint" id={`${id}-hint`}>{hintText}</p>
      <div className="flex flex-wrap gap-4">
        {dateParts.map(([part, partLabel, width]) => (
          <div className="grid gap-1" key={part}>
            <label className="font-bold" htmlFor={`${id}-${part}`}>{partLabel}</label>
            <input className={`form-input ${width}`} id={`${id}-${part}`} name={`${id}-${part}`} inputMode="numeric" />
          </div>
        ))}
      </div>
    </fieldset>
  )
}
