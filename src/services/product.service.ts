import { API } from "../contexts/api";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import { CatalogProduct } from "../modules/product/types";

export const productService = {
    query
}

async function query(filterBy: IFilterBy) {
    let productsToShow: CatalogProduct[] = await API.product.getAll()
    if (filterBy) {
        let { search, sort, category } = filterBy
        if (category === 'all') category = ''
        const regexCategory: RegExp = new RegExp(category, 'i');
        const regexSearch: RegExp = new RegExp(search, 'i');

        productsToShow = productsToShow.filter((product: CatalogProduct) => {
            return (
                regexSearch.test(product.title) &&
                regexCategory.test(product.category)
            )
        })
    }

    return productsToShow
}