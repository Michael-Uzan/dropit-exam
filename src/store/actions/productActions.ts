import { IFilterBy } from "../../interfaces/IFilterBy.interface";
import { productService } from "../../services/product.service";

export function loadProducts() {
  return async (dispatch: Function, getState: Function) => {
    const { filterBy } = getState().productModule
    try {
      let products = await productService.query(filterBy)
      dispatch({ type: 'SET_PRODUCTS', products })
    } catch (err) {
      console.log('canot load products ', err);
      // eventBusService.showErrorMsg('Cannot load game!')
      // window.location.assign('/')
    }
  }
}

export function setFilterBy(filterBy: IFilterBy | null) {
  return (dispatch: Function) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}