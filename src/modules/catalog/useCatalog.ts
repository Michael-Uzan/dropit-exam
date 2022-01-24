import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { API } from "../../contexts/api";
import { addToCart } from "../../store/actions/cartActions";
import { loadProducts } from "../../store/actions/productActions";
import useFlag from "../../tools/hooks/useFlag";

import { CatalogProduct } from "../product/types";

import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {
  // const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, onStartLoading, onEndLoading] = useFlag(true);
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((ev: any, product: CatalogProduct) => {
    ev.stopPropagation()
    console.log("handleAddProductToCart");
    console.log("product", product);
    dispatch(addToCart(product))
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      // API.product.getAll().then(setProducts).finally(onEndLoading);
      onLoadProducts()
    },
    [] // eslint-disable-line
  );

  const onLoadProducts = async () => {
    await dispatch(loadProducts())
    onEndLoading()
  }

  return {
    isLoading,
    // products,
    columns,
    getKeyRow,
  };
};

export default useCatalog;
