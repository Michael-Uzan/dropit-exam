import { match } from "react-router-dom";
import ProductView from "../../../modules/product";

interface PropType {
    match: match
}

const ProductPage = ({ match }: PropType) => {
    return <ProductView match={match} />;
};

export default ProductPage;