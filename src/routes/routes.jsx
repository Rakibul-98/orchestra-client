import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import EventsPage from "../pages/Events/Event";
import AddEvent from "../pages/Events/AddEvent";
import MyEvents from "../pages/Events/MyEvents";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "events", element: <EventsPage /> },
      { path: "add-event", element: <AddEvent /> },
      { path: "my-events", element: <MyEvents /> },
      { path: "about", element: <About /> },
      // { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      // { path: "checkout", element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
      // { path: "profile", element: <ProtectedRoute><UserProfile /></ProtectedRoute> },
      // { path: "productDetails/:productId", element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
      // { path: "order-success", element: <ProtectedRoute><OrderSuccess /></ProtectedRoute> },

      // {
      //   path: "adminDashboard",
      //   element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
      //   children: [
      //     { index: true, element: <AllProducts /> },
      //     { path: "allProducts", element: <AllProducts /> },
      //     { path: "allUsers", element: <AllUsers /> },
      //     { path: "allOrders", element: <AllOrders /> },
      //     { path: "reports", element: <Reports /> },
      //   ],
      // },

      // {
      //   path: "customerDashboard",
      //   element: <ProtectedRoute><CustomerDashboard /></ProtectedRoute>,
      //   children: [
      //     { index: true, element: <AllOrders /> },
      //     { path: "allOrders", element: <AllOrders /> },
      //   ],
      // },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
