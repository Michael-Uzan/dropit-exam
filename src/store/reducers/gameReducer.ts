
const INITIAL_STATE: ProductState = {

}

export function gameReducer(state: ProductState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'SET_GAME':
      return {
        ...state
      }
    default:
      return state
  }
}

interface ProductState {

}
