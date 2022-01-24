import { ratingClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { productService } from "../../services/product.service";
import { RootState } from "../../store";
import { addToCart } from "../../store/actions/cartActions";
import { loadProducts, setFilterBy } from "../../store/actions/productActions";
import { AddToCartIcon } from "../../tools/icons";
import { LoadingSpinner } from "../../tools/ui_components";
import { StyledProductView } from "./StyledProductView"
import { CatalogProduct } from "./types";


interface PropType {
    match: any,
}

export const ProductView = ({ match }: PropType) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [product, setProduct] = useState<CatalogProduct | null>(null);
    const { products }: any = useSelector((state: RootState) => state.productModule)

    useEffect(() => {
        loadProduct();
    }, [match.params.productId]);

    const loadProduct = async () => {
        const { productId } = match.params;
        const currProduct = products.find((product: CatalogProduct) => (product.id === +productId))
        if (!currProduct) history.push('/catalog');
        else setProduct(currProduct)
    };

    const onAddToCart = () => {
        if (product) dispatch(addToCart(product))
    }

    if (!product) return <LoadingSpinner isVisible={true} />

    const { title, price, category, rating, description, image } = product

    return <StyledProductView>
        <h1>{title}</h1>
        <h2>Price: ${price}</h2>
        <button onClick={onAddToCart}><AddToCartIcon /></button>
        <h2>Category: {category}</h2>
        <img src={image} />
        <p>{description}</p>
        <h4>Rate: {rating.rate}</h4>
        <h4>Count: {rating.count}</h4>
    </StyledProductView>
};
