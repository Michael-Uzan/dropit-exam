const INITIAL_STATE: ProductState = {
  products: [],
  filterBy: null
}

export function productReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.products
      }
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: action.filterBy
      }
    default:
      return state
  }
}

interface ProductState {

}
