const CartReducer = (state, action) => {
  switch (action.type) {
    case 'PLACE_ORDER':
      console.log('aman pratap singh')
      console.log(state)
      return {
        ...state,
        isOrderLoading: false,
        isOrderError: false,
        orderPlaced: true,
        orderId: action.payload,
      }
    case 'SET_LOADING_ORDER':
      console.log('laodin')
      return { ...state, isOrderLoading: true }
    case 'API_ERROR_ORDER':
      return { ...state, isOrderError: true }
    case 'CART_TOTAL_ITEMS':
      console.log(state.cart)
      let updatedItemCount = state.cart.reduce(
        (initialVal, curEle) => initialVal + curEle.amount,
        0,
      )
      let updatedItemAmount = state.cart.reduce(
        (initialVal, curEle) => initialVal + curEle.amount * curEle.dr,
        0,
      )
      console.log(updatedItemCount)
      return {
        ...state,
        totalItem: updatedItemCount,
        totalAmount: updatedItemAmount,
      }
    case 'SET_INCREMENT':
      let updatedPro = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1
          return {
            ...curElem,
            amount: incAmount,
          }
        } else {
          return curElem
        }
      })
      return { ...state, cart: updatedPro }
    case 'SET_DECREMENT':
      console.log('asd;lja')
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1
          if (decAmount <= 1) decAmount = 1
          return {
            ...curElem,
            amount: decAmount,
          }
        } else {
          return curElem
        }
      })
      return { ...state, cart: updatedProduct }
    case 'ADD_TO_CART':
      let existingProduct = state.cart.find(
        (item) => item.id === action.payload.id,
      )
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          console.log(curElem, action.payload.id)
          if (curElem.id === action.payload.id) {
            var newAmount = curElem.amount + action.payload.amount
            return {
              ...curElem,
              amount: newAmount,
            }
          } else {
            return curElem
          }
        })
        return {
          ...state,
          cart: updatedProduct,
        }
      } else {
        let cartProduct = {
          name: action.payload.name,
          id: action.payload.id,
          mediaLink: action.payload.mediaLinks[0],
          amount: action.payload.amount,
          mrp: action.payload.mrp,
          dr: action.payload.dr,
          review: action.payload.review,
        }
        return { ...state, cart: [...state.cart, cartProduct] }
      }

    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload
        }),
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}

export default CartReducer
