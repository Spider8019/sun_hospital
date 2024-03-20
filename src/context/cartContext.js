import { createContext, useContext, useEffect, useReducer } from 'react'
import CartReducer from '../reducer/cartReducer'
import axios from 'axios'

const CartContext = createContext()

const getLocalCartData = () => {
  let newCartData = localStorage.getItem('anilomCart')
  // eslint-disable-next-line eqeqeq
  if (newCartData == []) return []
  else return JSON.parse(newCartData)
}
const initialState = {
  cart: getLocalCartData(),
  totalItem: 0,
  totalAmount: 0,
  isOrderLoading: false,
  isOrderError: false,
  orderPlaced: false,
  orderId: '',
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (id, amount, name, mediaLinks, mrp, dr, review) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, amount, name, mediaLinks, mrp, dr, review },
    })
  }

  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREMENT', payload: id })
  }
  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREMENT', payload: id })
  }
  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: id,
    })
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    })
  }

  const makeOrder = async (data) => {
    dispatch({ type: 'SET_LOADING_ORDER' })
    try {
      const res = await axios.post('https://anilom-b.vercel.app/order', data)
      const order = await res.data
      dispatch({ type: 'PLACE_ORDER', payload: 'aadf' })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'API_ERROR_ORDER' })
    }
  }

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL_ITEMS' })
    localStorage.setItem('anilomCart', JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
        makeOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
