import { uiActions } from "./ui";
import { cartActions } from "./cart";

export function fetchCartData() {
    return async dispatch => {
        async function fetchData() {
            const response = await fetch('https://myfirstreactdatabase-9a10a-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }
            ));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
            }));
        }
    }
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending Cart Data.',
            })
        );

        async function sendRequest() {
            const response = await fetch('https://myfirstreactdatabase-9a10a-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent Cart Data Successfully!',
            }));
        } catch (error) {
            sendCartData().catch(error => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                }));
            });
        }
    };
}
