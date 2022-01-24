import { ICartItem } from "../../../../interfaces/ICartItem.interface";

interface PropType {
    items: ICartItem[]
}

export const CartTotal = ({ items }: PropType) => {

    const getCartTotal = (): string => {
        const total: number = items.reduce((acc: number, item: ICartItem) => {
            return (acc + (item.count * item.product.price))
        }, 0);
        return total.toFixed(2)
    }

    const getItemsCount = (): number => {
        return items.reduce((acc: number, item: ICartItem) => {
            return (acc + item.count)
        }, 0);
    }

    const getProductsCount = (): number => {
        return items.length
    }

    return <section className="cart-total">
        <h2>Cart Summary: </h2>
        <div className="totals">
            <h4>Items: {getItemsCount()} </h4>
            <h4>Products: {getProductsCount()} </h4>
            <h4>Total Price: ${getCartTotal()} </h4>
        </div>
    </section>
};
