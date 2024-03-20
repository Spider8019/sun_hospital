const ProductReducer = (state, action) => {

  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: true }
    case 'API_ERROR':
      return { ...state, isError: true, isLoading: false }
    case 'SET_API_DATA':
      const featuredProducts = action.payload.filter(item => {
        return item.featured === true;
      });
      console.log(featuredProducts)
      return {
        ...state,
        featuredProducts: featuredProducts,
        products: action.payload,
        isError: false,
        isLoading: false,
      }

      case 'SET_SINGLE_LOADING':
        return { ...state, isSingleLoading: true }
      case 'SET_SINGLE_PRODUCT':
        console.log(action.payload)
        return {
          ...state,
          singleProduct: action.payload,
          isSingleLoading: false,
        }

    default:
      return state
  }
}

export default ProductReducer
