import React from "react";
import { useNavigate } from "react-router-dom";
import Cartbag from "../assets/Homeimage/Cartbag.png";
import { useCartWishlist } from "../context/CartWishlistContext";
import { toast } from "react-toastify";
function Cart() {
  const { cart, removeFromCart } = useCartWishlist();
  const navigate = useNavigate();
  const total = cart.reduce((s, it) => s + (it.price || 0), 0);
  const goToPayment = () => {
    if (cart.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    navigate("/payment", { state: { total } });
  };
  return (
    <div className="bg-[#e9e9e9] p-4">
      
      <h3 className="text-2xl font-bold">Cart</h3>
      <p className="text-[15px] mt-2">{cart.length} Courses in cart</p>
      {cart.length === 0 ? (
        <div className="bg-white p-15 m-5 mb-0 flex flex-col items-center text-center leading-1.5 rounded-md">
          
          <img
            src={Cartbag}
            alt="cart"
            className="w-95 object-cover mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Your Cart is Empty!</h4>
          <p className="text-gray-600 mb-6">
            Add some courses to start learning!
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#003372] text-white w-40 h-10 rounded-[5px] border-none hover:bg-[#002654]"
          >
            
            Return to Shop
          </button>
        </div>
      ) : (
        <div className="p-4">
          
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 mb-4 rounded-md flex justify-between items-center"
            >
              
              <div className="flex items-center gap-4">
                
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">Rs. {item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                
                Remove
              </button>
            </div>
          ))}
          <div className="bg-white p-4 rounded-md mt-4 flex justify-between items-center">
            
            <div>
              
              <h4 className="font-semibold">Total</h4>
              <p className="text-sm text-gray-600">Rs. {total}</p>
            </div>
            <button
              onClick={goToPayment}
              className="bg-[#1e90ff] text-white px-4 py-2 rounded"
            >
              
              Pay via eSewa
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;