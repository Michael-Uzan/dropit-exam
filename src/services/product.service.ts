import { API } from "../contexts/api";
import { IFilterBy } from "../interfaces/IFilterBy.interface";
import { CatalogProduct } from "../modules/product/types";
import { utilService } from "./util.service";

export const productService = {
    query

}

async function query(filterBy: IFilterBy | null) {
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

        productsToShow = _sortBy(productsToShow, sort)
    }
    return productsToShow
}

function _sortBy(productsToShow: CatalogProduct[], sort: string) {
    switch (sort) {
        case 'high-price':
            return utilService.sortByValue(productsToShow, 'price')
        case 'low-price':
            return utilService.sortByValue(productsToShow, 'price').reverse()
        case 'a-z':
            return utilService.sortByValue(productsToShow, 'title')
        case 'z-a':
            return utilService.sortByValue(productsToShow, 'title').reverse()
        default:
            return productsToShow
    }
}


