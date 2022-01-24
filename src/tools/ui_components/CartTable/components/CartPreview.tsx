import { ICartItem } from "../../../../interfaces/ICartItem.interface";


interface PropType {
    item: ICartItem
}

export const CartPreview = ({ item }: PropType) => {

    const getSubtotal = (): number => {
        return item.product.price * item.count
    }

    const { image, price, title } = item.product

    return <section className="cart-preview">
        <img src={image} />
        <h5>{title}</h5>
        <h5>Price: ${price}</h5>
        <h5>Quantity: {item.count}</h5>
        <h5>Subtotal: ${getSubtotal()}</h5>
    </section>
};
