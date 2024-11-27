import type { RouteObject } from 'react-router-dom'
import Account from '@/pages/Account'
import Help from '@/pages/Help'

const routes: RouteObject[] = [
  { path: '/', element: <Account /> },
  { path: '/discover', element: <Help /> }
]

export default routes