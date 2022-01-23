import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import { productReducer } from './reducers/productReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Connecting redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Combining reducers into one
const rootReducer = combineReducers({
  productModule: productReducer,
  cartModule: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))