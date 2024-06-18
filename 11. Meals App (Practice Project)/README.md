# Meals App: Practice Project
This project is a meals ordering application built with React. The app includes a variety of features such as adding meals to a cart, viewing the cart, checking out, and handling user progress through different states. The code is organized into several components and contexts to manage state and user interactions effectively.

## Project Structure
- **App Component:** Root component that initializes context providers and includes the main layout components.
- **Header Component:** Displays the application logo, title, and a button to show the cart.
- **Meals Component:** Fetches and displays a list of meals, allows adding meals to the cart.
- **Cart Component:** Displays the cart modal, shows items added to the cart, and allows modifying the cart.
- **Checkout Component:** Manages the checkout process, collects user data, and submits the order.
- **Modal Component:** Reusable modal dialog component.
- **Input Component:** Reusable input field with a label.
- **Button Component:** Reusable button component.
- **Error Component:** Displays error messages.
- **CartContext:** Manages the state of the cart items.
- **UserProgressContext:** Manages the state of user progress (e.g., viewing cart, checking out).

## Key Features and Concepts
- **useRef Hook:** For managing mutable references that persist across renders.
- **useEffect Hook:** For managing side effects such as fetching data and handling modal visibility.
- **useState Hook:** For managing state within functional components.
- **useCallback Hook:** For optimizing performance by memoizing functions.
- **useReducer Hook:** For managing complex state logic in the cart context.
- **Context API:** For managing global state and passing data between components.
- **Custom Hooks:** For handling HTTP requests and abstracting logic away from components.
- **Reusability:** Creating reusable components for buttons, inputs, and modals.