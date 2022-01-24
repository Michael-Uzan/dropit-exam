import { MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ICartItem } from "../../../interfaces/ICartItem.interface";
import { RootState } from "../../../store";
import DropitLogo from "../../../tools/assets/logo-dropit-business.svg";
import { CartIcon } from "../../icons";
import { StyledAppHeader } from "./StyledAppHeader";

export const AppHeader = () => {

    const { items }: any = useSelector((state: RootState) => state.cartModule)

    const getCountItems = (): number => {
        const countItems = items.reduce((acc: number, item: ICartItem) => {
            return acc + item.count;
        }, 0);
        return countItems ? countItems : ''
    }

    const onCartClick = () => {
        // window.location.assign('/cart')
    }

    return <header>
        <StyledAppHeader>
            <img src={DropitLogo} alt="logo" />
            <h3>Dropit Test</h3>
            <div className="cart-display" onClick={onCartClick}>
                <div>{getCountItems()}</div>
                <CartIcon />
            </div>
        </StyledAppHeader>
    </header>
};
