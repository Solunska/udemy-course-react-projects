# E-Shop Application: Practice Project

## Overview
This practice project is a simple e-shop application with a shopping cart feature built using React. The project leverages various advanced concepts such as prop drilling, solutions to prop drilling, the Context API, linking context to state, and the useReducer hook. The application allows users to browse products and manage a shopping cart effectively.

## Project Structure
- **App Component:** Root component managing the state and structure of the app.
- **Cart Component:** Displays items in the shopping cart and allows quantity updates.
- **CartModal Component:** Modal dialog for the shopping cart using portals.
- **Header Component:** Displays the header and cart button.
- **Product Component:** Displays individual product details and an "Add to Cart" button.
- **Shop Component:** Displays a list of products.
- **CartContextProvider Component:** Provides context for the shopping cart.
- **shopping-cart-context.jsx:** Context setup for managing the shopping cart state.

## Key Features and Concepts
- **Prop Drilling Solutions:** Using the Context API to avoid excessive prop drilling.
- **Context API:** For managing and sharing state across components.
- **useReducer Hook:** To manage complex state logic in the shopping cart.
- **Portals:** For rendering the cart modal outside the main DOM hierarchy.
- **Reusable Components:** Creating reusable UI components like product cards and buttons.