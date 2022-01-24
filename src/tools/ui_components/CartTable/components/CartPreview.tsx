import { useDispatch } from "react-redux";
import { ICartItem } from "../../../../interfaces/ICartItem.interface";
import { removeFromCart } from "../../../../store/actions/cartActions";

interface PropType {
    item: ICartItem
}

export const CartPreview = ({ item }: PropType) => {

    const dispatch = useDispatch()

    const getSubtotal = (): number => {
        return item.product.price * item.count
    }

    const onRemoveItem = () => {
        dispatch(removeFromCart(item.product))
    }

    const { image, price, title } = item.product

    return <section className="cart-preview">
        <h1 onClick={onRemoveItem}>X</h1>
        <img src={image} />
        <h5>{title}</h5>
        <h5>Price: ${price}</h5>
        <h5>Quantity: {item.count}</h5>
        <h5>Subtotal: ${getSubtotal()}</h5>
    </section>
};
