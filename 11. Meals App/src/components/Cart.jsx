import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../context/UserProgressContext";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleOpenCheckout() {
        userProgressCtx.showCheckout();
    }

    return <Modal className="cart" open={userProgressCtx.progress === 'cart'} onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(item => <li key={item.id} className="cart-item">
                <p>{item.name} - {currencyFormatter.format(item.quantity * item.price)}</p>
                <div className="cart-item-actions">
                    <button onClick={() => cartCtx.removeItem(item.id)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => cartCtx.addItem(item)}>+</button>
                </div>
            </li>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <div className="modal-actions">
            <Button linkButton onClick={handleCloseCart}>Close</Button>
            {cartCtx.items.length !== 0 && <Button onClick={handleOpenCheckout} >Go to Checkout</Button>}
        </div>
    </Modal>
}