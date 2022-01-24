import { CatalogProduct } from "../../modules/product/types"

export function addToCart(product: CatalogProduct) {
    return (dispatch: Function) => {
        dispatch({ type: 'ADD_TO_CART', product })
    }
}

export function removeFromCart(product: CatalogProduct) {
    return (dispatch: Function) => {
        dispatch({ type: 'REMOVE_FROM_CART', product })
    }
}

export function clearCart() {
    return (dispatch: Function) => {
        dispatch({ type: 'CLEAR_CART' })
    }
}