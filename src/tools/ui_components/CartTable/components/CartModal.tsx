interface PropType {
    isModal: boolean
}

export const CartModal = ({ isModal }: PropType) => {

    if (!isModal) return <></>

    return <section className="cart-modal">
        <div>Thank you, order has complete!</div>
    </section>
};
