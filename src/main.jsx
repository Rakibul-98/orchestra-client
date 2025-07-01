import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import router from "./routes/routes.jsx";
import { persistor, store } from "./redux/features/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
