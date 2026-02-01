import React, { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
const CartWishlistContext = createContext(null);
const initialState = {
  cart: [],
  wishlist: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cart.find((i) => i.id === action.payload.id);
      if (exists) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };
    case "ADD_TO_WISHLIST": {
      const exists = state.wishlist.find((i) => i.id === action.payload.id);
      if (exists) return state;
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((i) => i.id !== action.payload),
      };
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function CartWishlistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_wishlist_v1");
      if (raw) dispatch({ type: "SET_STATE", payload: JSON.parse(raw) });
    } catch (e) {
      console.error("Failed to load cart/wishlist from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart_wishlist_v1", JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save cart/wishlist to localStorage", e);
    }
  }, [state]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(`${item.title} added to cart`);
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.info(`Removed from cart`);
  };

  const addToWishlist = (item) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    toast.success(`${item.title} added to wishlist`);
  };

  const removeFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
    toast.info(`Removed from wishlist`);
  };

  return (
    <CartWishlistContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
}

export function useCartWishlist() {
  const ctx = useContext(CartWishlistContext);
  if (!ctx) throw new Error("useCartWishlist must be used within CartWishlistProvider");
  return ctx;
}

export default CartWishlistContext;  