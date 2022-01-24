import { ICartItem } from "../../interfaces/ICartItem.interface";
import { CatalogProduct } from "../../modules/product/types";

interface CartState {
    items: ICartItem[]
}

const INITIAL_STATE: CartState = {
    items: []
}

export function cartReducer(state: CartState = INITIAL_STATE, action: any) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const newitems: ICartItem[] = JSON.parse(JSON.stringify(state.items))
            const item = newitems.find((item: ICartItem) => {
                return item.product.id === action.product.id;
            });
            if (item) item.count++;
            else newitems.push({ product: action.product, count: 1 });
            return {
                ...state,
                items: newitems
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

