import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))
const Others = React.lazy(() => import('../pages/Others'))

export const routesList = {
  home: '/',
  others: '/others',
}

const MainRouteList = [
  { path: routesList.home, exact: true, element: Home },
  {
    path: routesList.others,
    exact: true,
    element: Others,
  },
]
export default MainRouteList
