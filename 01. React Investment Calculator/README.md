# Investment Calculator

## Overview
The Investment Calculator project serves as an introduction to React, focusing on fundamental concepts such as components, props, event handling, state management, and conditional rendering. It allows users to calculate the potential returns on an investment based on various parameters like initial investment, annual investment, expected return rate, and investment duration.

## Project Structure
- **App Component:** The main component that integrates other components and manages the application state.
- **Header Component:** Displays the header section with the project title and logo.
- **Inputs Component:** Renders input fields for users to enter investment details.
- **Results Component:** Calculates and displays investment results based on user input.

## Key Learnings and Concepts Practiced
1. **Components:** Understanding the role and structure of React components.
2. **Props:** Passing data from parent to child components.
3. **State Management:** Utilizing React's useState hook to manage component state.
4. **Event Handling:** Capturing and handling user interactions such as input changes.
5. **Conditional Rendering:** Displaying components conditionally based on certain criteria.

## Code Overview
### App Component
- Manages the application state using useState hook.
- Handles user input changes through the handleChange function.
- Conditionally renders Results component based on input validity.

### Results Component
- Calculates investment results based on user input using the calculateInvestmentResults function.
- Displays investment data in a tabular format.

### Inputs Component
- Renders input fields for users to enter investment details.
- Handles input changes and communicates them to the parent component using onChange prop.

### Header Component
- Displays the header section with the project title and logo.