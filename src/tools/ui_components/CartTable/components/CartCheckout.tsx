import { MouseEvent, useEffect, useRef, useState } from "react";
import { useForm } from "../../../hooks/useForm";

interface PropType {
    onCheckout: Function
}

export const CartCheckout = ({ onCheckout }: PropType) => {

    const [isDisabeld, setIsDisabeld] = useState(true);


    const [checkout, handleChange] = useForm({
        username: '',
        address: ''
    })

    useEffect(() => {
        if (checkout.username && checkout.address) setIsDisabeld(false)
        else setIsDisabeld(true)
    }, [checkout])

    const onCartSubmit = (ev: MouseEvent<Element, MouseEvent>) => {
        ev?.preventDefault()
        onCheckout()
    }

    const { username, address } = checkout

    return <section className="cart-checkout">
        <h2>Checkout</h2>
        <form onSubmit={(ev: any) => onCartSubmit(ev)} >
            <div>
                <label htmlFor="username">Name: </label>
                <input type="text" name="username" id="username" value={username}
                    onChange={handleChange} placeholder="Name" autoFocus />
            </div>
            <div>
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" value={address}
                    onChange={handleChange} placeholder="Address" />
            </div>
            <button disabled={isDisabeld}>Checkout!</button>
        </form>
    </section>
};
