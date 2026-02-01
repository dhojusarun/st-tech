import React, { useEffect } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartWishlist } from "../context/CartWishlistContext";

function Success() {
  const [searchParams] = useSearchParams();
  const { cart } = useCartWishlist();

  const data = searchParams.get("data");

  if (!data) {
    return (
      <div className="p-5 mt-10 text-center text-red-500">
        This page is only accessible after successful payment.
      </div>
    );
  }

  const res = JSON.parse(atob(data));

  useEffect(() => {
    localStorage.removeItem("cart_wishlist_v1");
  }, []);

  return (
    <div className="border rounded-2xl bg-gray-200 p-5 w-96 m-auto mt-20">
      <div className="bg-white rounded-full w-fit p-5 m-auto">
        <FaCheck size={80} color="green" />
      </div>

      <h1 className="text-center text-3xl font-bold text-green-600 mt-3">
        Payment Successful
      </h1>

      <div className="mt-6 bg-white p-3 rounded">
        <div className="flex justify-between">
          <span>Status</span>
          <span className="font-bold">{res.status}</span>
        </div>

        <div className="flex justify-between">
          <span>Total Amount</span>
          <span className="font-bold">Rs. {res.total_amount}</span>
        </div>

        <div className="flex justify-between">
          <span>Transaction Code</span>
          <span className="font-bold">{res.transaction_code}</span>
        </div>
      </div>

      <NavLink
        to="/"
        className="block text-center mt-5 bg-green-600 text-white py-2 rounded"
      >
        Continue Shopping
      </NavLink>
    </div>
  );
}

export default Success;