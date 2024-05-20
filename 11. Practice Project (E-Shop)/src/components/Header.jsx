import logo from '../assets/logo.jpg';
import Button from './UI/Button';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import UserProgressContext from '../context/UserProgressContext';

export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0)

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo image" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button onClick={handleShowCart} linkButton >Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
}