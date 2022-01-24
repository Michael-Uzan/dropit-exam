import { ICartItem } from "../../../../interfaces/ICartItem.interface";
import { CartPreview } from "./CartPreview";

interface PropType {
    items: ICartItem[]
}
export const CartList = ({ items }: PropType) => {

    return <section className="cart-list">
        {items.map((item: ICartItem) => <CartPreview key={item.product.id} item={item} />)}
    </section>
};
