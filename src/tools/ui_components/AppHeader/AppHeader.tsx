import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { ICartItem } from "../../../interfaces/ICartItem.interface";
import { RootState } from "../../../store";
import DropitLogo from "../../../tools/assets/logo-dropit-business.svg";
import { BackIcon, CartIcon } from "../../icons";
import { StyledAppHeader } from "./StyledAppHeader";

export const AppHeader = () => {

    const { items }: any = useSelector((state: RootState) => state.cartModule)
    const history = useHistory()

    const getCountItems = (): number => {
        const countItems = items.reduce((acc: number, item: ICartItem) => {
            return acc + item.count;
        }, 0);
        return countItems ? countItems : ''
    }

    const onGoBack = () => {
        history.goBack()
    }

    const onCartClick = () => {
        history.push('/cart')
    }

    return <header>
        <StyledAppHeader>
            <div className="logo-back">
                <img src={DropitLogo} alt="logo" />
                <button onClick={onGoBack} > <BackIcon /></button>
                <nav>
                    <NavLink exact activeClassName="active-nav" to={'/'}>Home</NavLink>
                    <NavLink activeClassName="active-nav" to={'/catalog'}>Catalog</NavLink>
                    <NavLink activeClassName="active-nav" to={'/cart'}>Cart</NavLink>
                </nav>
            </div>
            <div className="cart-display" onClick={onCartClick}>
                <div>{getCountItems()}</div>
                <CartIcon />
            </div>
        </StyledAppHeader>
    </header>
};
