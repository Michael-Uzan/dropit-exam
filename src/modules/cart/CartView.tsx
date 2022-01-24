import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import CartTable from '../../tools/ui_components/CartTable';
import { StyledCartView } from './StyledCartView';

const CartView = () => {

    const { items } = useSelector((state: RootState) => state.cartModule)
    const dispatch = useDispatch()

    return <StyledCartView>
        <div className="CatalogView__header">
            <div className="CatalogView__header_text">Cart</div>
        </div>

        <CartTable items={items} />



    </StyledCartView>
};

export default CartView