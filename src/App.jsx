import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
