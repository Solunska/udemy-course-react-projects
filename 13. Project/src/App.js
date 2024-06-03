import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiActions } from './store/ui';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const show = useSelector(state => state.ui.show);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    async function sendCartData() {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending Cart Data.',
      }));

      const response = await fetch('https://myfirstreactdatabase-9a10a-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent Cart Data Successfully!',
      }));

    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      }));
    });

  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
