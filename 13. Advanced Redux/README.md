# Advanced Redux

This project explores advanced Redux concepts, including integrating useEffect for data fetching, using action creators with Thunk middleware, and managing complex state changes. The application architecture involves multiple components interacting with Redux to handle shopping cart functionality.

## Project Structure

### 1. Components

- **Cart Component:** Renders the items added to the shopping cart.
- **Cart Button Component:** Displays the cart button with a badge indicating the total quantity of items in the cart.
- **Cart Item Component:** Renders each individual item in the cart with options to remove or add items.
- **Layout Component:** Provides a common layout structure for the application.
- **Main Header Component:** Displays the main header with the application title and cart button.
- **Product Item Component:** Renders each product with options to add it to the cart.

### 2. Redux Configuration

- **Cart Slice:** Manages the state related to the shopping cart, including items, total quantity, and changes.
- **UI Slice:** Manages UI-related state, such as toggling the cart visibility and displaying notifications.
- **Store Configuration:** Configures the Redux store with combined reducers for cart and UI states.

### 3. Thunk Actions

- **fetchCartData:** Asynchronous action to fetch cart data from an external API and update the cart state accordingly.
- **sendCartData:** Asynchronous action to send cart data to an external API for persistence.

## Key Features and Concepts

- **Redux Thunk Middleware:** Enables asynchronous logic in Redux action creators, allowing side effects like data fetching and API calls.
- **useEffect Hook:** Utilized for performing side effects in functional components, such as fetching data or updating the cart.
- **Redux Slices:** Organizes related Redux logic (state, actions, reducers) into slices for better modularity and maintainability.
- **React-Redux Integration:** Components interact with Redux store using hooks like useSelector and useDispatch, ensuring seamless state management.
- **Data Fetching:** Demonstrates how to fetch data from an external API and update Redux state accordingly, ensuring consistent UI and data synchronization.
- **UI Notifications:** Implements UI notifications to provide feedback to users on actions like data fetching, sending data, or errors.
