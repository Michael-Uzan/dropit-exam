import { ICartItem } from "../../interfaces/ICartItem.interface";
import { CartAction, CartState } from "../../interfaces/ICartReducer.interface";
import { CatalogProduct } from "../../modules/product/types";

const INITIAL_STATE: CartState = {
    items: []
}

export function cartReducer(state: CartState = INITIAL_STATE, action: CartAction) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newitems: ICartItem[] = JSON.parse(JSON.stringify(state.items))
            const item = newitems.find((item: ICartItem) => {
                return item.product.id === action?.product?.id;
            });
            if (item) item.count++;
            else newitems.push({ product: action.product as CatalogProduct, count: 1 });
            return {
                ...state,
                items: newitems
            }
        }
        case 'REMOVE_FROM_CART': {
            let newitems: ICartItem[] = JSON.parse(JSON.stringify(state.items))
            newitems = newitems.filter((item: ICartItem) => {
                return item.product.id !== action?.product?.id;
            });
            return {
                ...state,
                items: newitems
            }
        }
        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

