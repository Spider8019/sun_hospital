import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainRouteList from '../routes/listOfRoutes'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Error from '../pages/Error'

const AllRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Suspense fallback={'... is loading'}>
          <Routes>
            {MainRouteList.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              )
            })}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default AllRoutes
