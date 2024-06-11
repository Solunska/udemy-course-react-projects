# React Routing Basics Project Documentation

## Overview
This project is focused on learning the fundamentals of React routing. It covers essential concepts such as routing setup, navigation, dynamic routes, and error handling.

## Components and Pages
### MainNavigation Component
- **Purpose:** Renders the main navigation bar with links to different pages.
- **Features Practiced:**
  - Utilizing `NavLink` from `react-router-dom` for navigation links.
  - Styling navigation links using CSS modules (`MainNavigation.module.css`).

### ErrorPage Component
- **Purpose:** Displays an error message when a route is not found.
- **Features Practiced:**
  - Handling route errors and displaying a custom error page.
  - Integrating the `MainNavigation` component to maintain consistent navigation.

### HomePage Component
- **Purpose:** Represents the homepage of the application.
- **Features Practiced:**
  - Using `Link` from `react-router-dom` to navigate to other pages.
  - Implementing programmatic navigation using `useNavigate` hook.

### ProductDetailPage Component
- **Purpose:** Displays details of a specific product.
- **Features Practiced:**
  - Accessing route parameters using `useParams` hook.
  - Navigating back to the products page using relative links.

### ProductsPage Component
- **Purpose:** Lists all available products.
- **Features Practiced:**
  - Rendering a list of products dynamically.
  - Using `Link` to create dynamic links for each product.

### RootLayout Component
- **Purpose:** Provides a common layout structure for the entire application.
- **Features Practiced:**
  - Including the `MainNavigation` component to ensure consistent navigation across pages.
  - Rendering the main content using the `Outlet` component from `react-router-dom`.

## Routing Configuration
- **Router Setup:** The routing is configured using `createBrowserRouter` from `react-router-dom`.
- **Routes:** Routes are defined with associated components for different paths, including the homepage, products page, and product detail page.
- **Error Handling:** An error page is provided for routes that do not match any defined paths.

## Key Concepts Learned
- Setting up basic routing in a React application.
- Creating navigation links using `NavLink` and `Link`.
- Handling route parameters and accessing them using hooks like `useParams`.
- Implementing programmatic navigation with `useNavigate`.
- Creating dynamic routes for displaying product details.
- Configuring a common layout structure for multiple pages using `RootLayout`.

## Skills Practiced
- React routing basics and concepts.
- Integration of routing components within a React application.
- Error handling and providing user-friendly error pages.
- Dynamic routing for displaying content based on route parameters.

This project serves as a foundation for understanding more advanced routing concepts and building more complex applications with React routing.
