export function ChoiceList({ type, name, items, defaultValue }: { type: 'checkbox' | 'radio'; name: string; items: readonly string[]; defaultValue?: string }) {
  return (
    <div className="grid gap-3 text-xl">
      {items.map((item, index) => (
        <label className="flex items-start gap-3" key={item}>
          <input
            className="mt-1 size-7 shrink-0 accent-ink focus-visible:focus-ring"
            defaultChecked={item === defaultValue || undefined}
            id={`${name}-${index}`}
            name={name}
            type={type}
            value={item}
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  )
}
