import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { productService } from "../../services/product.service";
import { LoadingSpinner } from "../../tools/ui_components";
import { StyledProductView } from "./StyledProductView"
import { CatalogProduct } from "./types";


interface PropType {
    match: any,
}

export const ProductView = ({ match }: PropType) => {

    const history = useHistory()
    const [product, setProduct] = useState<CatalogProduct | null>(null);


    useEffect(() => {
        loadProduct();
    }, [match.params.productId]);

    const loadProduct = async () => {
        const { productId } = match.params;
        console.log('productId', productId)
        const currProduct = await productService.getById(productId)
        if (!product) history.push('./page-not-dound');
        console.log('product', currProduct)
        if (currProduct) setProduct(currProduct)
    };

    const goBack = () => {
        history.push('/');
    };

    if (!product) return <LoadingSpinner isVisible={true} />

    return <StyledProductView>
        <h1>Product</h1>
        {/* <h3>{product.category}</h3> */}
    </StyledProductView>
};
