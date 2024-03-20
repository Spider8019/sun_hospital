import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))
const Others = React.lazy(() => import('../pages/Others'))
const Cart = React.lazy(() => import('../pages/Cart'))
const SingleProduct = React.lazy(() => import('../pages/SingleProduct'))
const Products = React.lazy(() => import('../pages/Products'))
const Error = React.lazy(() => import('../pages/Error'))

export const routesList = {
  home: '/',
  others: '/others',
  cart: '/cart',
  singleProduct: '/singleProduct/:id',
  products: '/products',
  error: '/error',
}

const MainRouteList = [
  { path: routesList.home, exact: true, element: Home },
  {
    path: routesList.others,
    exact: true,
    element: Others,
  },
  {
    path: routesList.cart,
    exact: true,
    element: Cart,
  },
  {
    path: routesList.singleProduct,
    exact: true,
    element: SingleProduct,
  },
  { path: routesList.products, exact: true, element: Products },
  {
    path: routesList.error,
    exact: true,
    element: Error,
  },
]
export default MainRouteList
