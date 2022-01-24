import { CatalogProduct } from "../../modules/product/types";

//////////////////////////////////
//  When Working on Developmet: //
//////////////////////////////////
// const link: string = (process.env.NODE_ENV === 'production') ?
// 	`../db/products.json` :
// 	`../../../../db/products.json`

const API = {
	product: {
		getAll: async (): Promise<CatalogProduct[]> =>
			fetch("../db/products.json", {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
			)
				.then(
					(response) => response.json()
				),
	},
	category: {
		getAll: async (): Promise<string[]> =>
			fetch("db/categories.json", {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
				.then(
					(response) => response.json()
				),
	},
};

export { API };
