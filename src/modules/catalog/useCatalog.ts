import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/cartActions";
import { loadProducts } from "../../store/actions/productActions";
import useFlag from "../../tools/hooks/useFlag";
import { CatalogProduct } from "../product/types";
import useCatalogTable from "./useCatalogTable";

const useCatalog = () => {
  const [isLoading, onEndLoading] = useFlag(true);
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((ev: any, product: CatalogProduct) => {
    ev.stopPropagation()
    dispatch(addToCart(product))
  }, []);

  const { columns, getKeyRow } = useCatalogTable({
    onAddItem: handleAddProductToCart,
  });

  useEffect(
    () => {
      onLoadProducts()
    },
    []
  );

  const onLoadProducts = async () => {
    await dispatch(loadProducts())
    onEndLoading()
  }

  return {
    isLoading,
    columns,
    getKeyRow,
  };
};

export default useCatalog;
