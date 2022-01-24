import { useState } from "react";
import { useDispatch } from "react-redux";
import { ICartItem } from "../../../interfaces/ICartItem.interface";
import { clearCart } from "../../../store/actions/cartActions";
import { CartCheckout } from "./components/CartCheckout";
import { CartList } from "./components/CartList";
import { CartModal } from "./components/CartModal";
import { CartTotal } from "./components/CartTotal";
import StyledCartTable from "./StyledCartTable";

interface PropType {
    items: ICartItem[]
}

const CartTable = ({ items }: PropType) => {

    const [isModal, setIsModal] = useState(false);
    const dispatch = useDispatch()

    const onCheckout = () => {
        setIsModal(true)
        setTimeout(() => {
            setIsModal(false)
        }, 2500)
        dispatch(clearCart())
    }

    return (
        <StyledCartTable>
            {items.length ? (
                <>
                    <CartList items={items} />
                    <CartTotal items={items} />
                    <CartCheckout onCheckout={onCheckout} />
                </>
            ) : (
                <h3 className="no-products">Sorry, no products in cart...</h3>
            )}

            <CartModal isModal={isModal} />

        </StyledCartTable>
    )
};

export default CartTable
