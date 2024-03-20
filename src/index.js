import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind.css'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import './i18n'
import App from './App'
import { AppProvider } from './context/productContext'
import { FilterContextProvider } from './context/filterContext'
import { CartContextProvider } from './context/cartContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartContextProvider>
          <I18nextProvider i18n={i18next}>
            <Suspense fallback="...is loading">
              <App />
            </Suspense>
          </I18nextProvider>
      </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>,
)
