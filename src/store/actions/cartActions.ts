import { CatalogProduct } from "../../modules/product/types"

export function addToCart(product: CatalogProduct) {
    return (dispatch: Function) => {
        dispatch({ type: 'ADD_TO_CART', product })
    }
}