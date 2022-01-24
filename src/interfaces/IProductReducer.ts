import { CatalogProduct } from "../modules/product/types";
import { IFilterBy } from "./IFilterBy.interface";

export interface ProductState {
    products: CatalogProduct[],
    filterBy: null | IFilterBy
}

export interface ProductAction {
    type: string,
    products?: CatalogProduct[],
    filterBy?: IFilterBy
}