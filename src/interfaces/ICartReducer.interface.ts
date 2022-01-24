import { CatalogProduct } from "../modules/product/types";
import { ICartItem } from "./ICartItem.interface";

export interface CartState {
    items: ICartItem[]
}

export interface CartAction {
    type: string,
    product?: CatalogProduct
}