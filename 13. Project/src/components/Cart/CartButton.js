import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity =  useSelector(state => state.cart.totalQuantity);

  function handleToggleCart(){
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={handleToggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
