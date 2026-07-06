const visitsKey = 'membership-visits'

export function getVisitsAnswer() {
  return sessionStorage.getItem(visitsKey)
}

export function setVisitsAnswer(value: string) {
  sessionStorage.setItem(visitsKey, value)
}

export function clearVisitsAnswer() {
  sessionStorage.removeItem(visitsKey)
}
