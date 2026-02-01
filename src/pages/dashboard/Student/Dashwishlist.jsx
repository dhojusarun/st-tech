import React from 'react'
import { MdNotificationsNone } from "react-icons/md";
import Riva from "../../../assets/Homeimage/Riva.png";
import wish from "../../../assets/Homeimage/wish.png";
import { useCartWishlist } from "../../../context/CartWishlistContext";

function Dashwishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useCartWishlist();
  return (
    <div>
      <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">My Wishlist</h1>
      
              <div className="flex gap-2 items-center">
                <MdNotificationsNone size={25} />
                <h1 className="font-bold">Riva Shakya</h1>
                <img
                  src={Riva}
                  alt=""
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>

      {wishlist.length === 0 ? (
        <div>
          <img src={wish} alt="" className='w-90 m-auto mt-30 object-cover'/>
          <h1 className='font-medium text-2xl text-center'>Empty wishlist</h1>
        </div>
      ) : (
        <div className="grid gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">Rs. {item.price}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => addToCart(item)} className="bg-yellow-300 px-3 py-1 rounded">Add to cart</button>
                <button onClick={() => removeFromWishlist(item.id)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashwishlist