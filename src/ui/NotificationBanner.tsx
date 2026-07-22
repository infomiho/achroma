import { useId, type ReactNode, type Ref } from 'react'

export function NotificationBanner({ variant = 'info', ref, children }: { variant?: 'info' | 'success'; ref?: Ref<HTMLDivElement>; children: ReactNode }) {
  const titleId = useId()
  const isSuccess = variant === 'success'

  return (
    <div
      className={isSuccess ? 'border-4 border-success outline-none' : 'border-4 border-info outline-none'}
      ref={ref}
      role={isSuccess ? 'alert' : 'region'}
      tabIndex={-1}
      aria-labelledby={titleId}
    >
      <p className={isSuccess ? 'bg-success px-5 py-2 text-xl font-bold text-paper' : 'bg-info px-5 py-2 text-xl font-bold text-paper'} id={titleId}>
        {isSuccess ? 'Success' : 'Important'}
      </p>
      <p className="p-5 text-lg font-bold">{children}</p>
    </div>
  )
}
