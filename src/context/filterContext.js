import { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductContext } from './productContext'
import filterReducer from '../reducer/filterReducer'

const FilterContext = createContext()
const initialState = {
  filterProducts: [],
  allProducts: [],
}

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext()

  const [state, dispatch] = useReducer(filterReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
