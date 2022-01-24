export interface CatalogProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductDetails extends CatalogProduct {
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
