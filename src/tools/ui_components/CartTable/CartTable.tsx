import { ICartItem } from "../../../interfaces/ICartItem.interface";
import { CartList } from "./components/CartList";
import StyledCartTable from "./StyledCartTable";

interface PropType {
    items: ICartItem[]
}

export const CartTable = ({ items }: PropType) => {
    return <StyledCartTable>
        <CartList items={items} />
    </StyledCartTable>
};
