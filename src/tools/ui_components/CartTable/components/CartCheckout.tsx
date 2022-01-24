import { useForm } from "../../../hooks/useForm";

export const CartCheckout = () => {

    const [checkout, handleChange, setCheckout] = useForm({
        username: '',
        address: ''
    })

    const { username, address } = checkout

    return <section className="cart-checkout">
        <form >
            <div>
                <label htmlFor="username">Name: </label>
                <input type="text" name="username" id="username" value={username}
                    onChange={handleChange} placeholder="Name" />
            </div>
            <div>
                <label htmlFor="address">Name: </label>
                <input type="text" name="address" id="address" value={address}
                    onChange={handleChange} placeholder="Address" />
            </div>
            <button>Checkout!</button>
        </form>
    </section>
};
