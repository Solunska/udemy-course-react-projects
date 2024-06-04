import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// DEFINING ROUTS WITH JSX CODE:
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//   </Route>
// );
// const router1 = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:
      [
        { path: '', element: <HomePage /> }, // instead of path: '' we can write index:true
        { path: 'products', element: <ProductsPage /> },
        { path: 'products/:productId', element: <ProductDetailPage /> },
      ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;