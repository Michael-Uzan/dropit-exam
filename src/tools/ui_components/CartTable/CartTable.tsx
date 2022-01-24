import { ICartItem } from "../../../interfaces/ICartItem.interface";
import { CartCheckout } from "./components/CartCheckout";
import { CartList } from "./components/CartList";
import { CartTotal } from "./components/CartTotal";
import StyledCartTable from "./StyledCartTable";

interface PropType {
    items: ICartItem[]
}

const CartTable = ({ items }: PropType) => {
    return <StyledCartTable>
        <CartList items={items} />
        <CartTotal items={items} />
        <CartCheckout />
    </StyledCartTable>
};

export default CartTable
