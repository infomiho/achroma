import { useEffect, useRef, useState, type ComponentType } from 'react'
import ExamplesIndex from './pages/ExamplesIndex'
import Home from './pages/Home'
import PageNotFound from './pages/examples/PageNotFound'
import BookingsPage from './pages/examples/bookings/BookingsPage'
import DashboardPage from './pages/examples/dashboard/DashboardPage'
import CheckAnswersPage from './pages/examples/membership/CheckAnswersPage'
import ConfirmationPage from './pages/examples/membership/ConfirmationPage'
import QuestionPage from './pages/examples/membership/QuestionPage'
import StartPage from './pages/examples/membership/StartPage'
import SettingsPage from './pages/examples/settings/SettingsPage'
import SecurityCodePage from './pages/examples/sign-in/SecurityCodePage'
import SignInPage from './pages/examples/sign-in/SignInPage'

const siteTitle = 'Achroma'

type Route = { title?: string; Page: ComponentType }

const notFound: Route = { title: 'Page not found', Page: PageNotFound }

const routes: Record<string, Route> = {
  '/': { Page: Home },
  '/examples': { title: 'Examples', Page: ExamplesIndex },
  '/examples/membership/start': { title: 'Apply for a studio membership', Page: StartPage },
  '/examples/membership/question': { title: 'How often will you use the studio?', Page: QuestionPage },
  '/examples/membership/check-answers': { title: 'Check your answers', Page: CheckAnswersPage },
  '/examples/membership/confirmation': { title: 'Membership confirmed', Page: ConfirmationPage },
  '/examples/sign-in': { title: 'Sign in', Page: SignInPage },
  '/examples/sign-in/security-code': { title: 'Check your phone', Page: SecurityCodePage },
  '/examples/dashboard': { title: 'Overview', Page: DashboardPage },
  '/examples/bookings': { title: 'Bookings', Page: BookingsPage },
  '/examples/settings': { title: 'Settings', Page: SettingsPage },
  '/examples/page-not-found': notFound,
}

function currentPath() {
  const hash = window.location.hash
  if (!hash.startsWith('#/')) return '/'
  const path = hash.slice(1).replace(/\/+$/, '')
  return path === '' ? '/' : path
}

function App() {
  const [path, setPath] = useState(currentPath)
  const lastPath = useRef(path)

  useEffect(() => {
    function syncPath() {
      setPath(currentPath())
    }
    window.addEventListener('hashchange', syncPath)
    return () => window.removeEventListener('hashchange', syncPath)
  }, [])

  const { title, Page } = routes[path] ?? notFound

  useEffect(() => {
    document.title = title ? `${title} - ${siteTitle}` : siteTitle
    if (lastPath.current !== path) {
      lastPath.current = path
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [path, title])

  return <Page />
}

export default App
