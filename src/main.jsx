import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastContainer, Bounce } from "react-toastify";

import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { CartWishlistProvider } from "./context/CartWishlistContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-pltnp8lblsap5iau.us.auth0.com"
      clientId="SbF6XYubKuhpQiqioH0CwPyndnNr2kg0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation="localstorage"
    >
      <CartWishlistProvider>
        <App />
      </CartWishlistProvider>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </Auth0Provider>
  </BrowserRouter>
);