const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_FILTER_PRODUCTS':
      console.log(action.payload)
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      }
    default:
      return state
  }
}

export default filterReducer
