import { CatalogProduct } from "../modules/product/types";

export interface ICartItem {
    product: CatalogProduct,
    count: number
}