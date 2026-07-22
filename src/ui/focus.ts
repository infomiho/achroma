import type { MouseEvent } from 'react'

export function focusMain(event: MouseEvent) {
  event.preventDefault()
  document.getElementById('main')?.focus()
}

export function focusTarget(event: MouseEvent, id: string) {
  event.preventDefault()
  document.getElementById(id)?.focus()
}
