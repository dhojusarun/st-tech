import { IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Failure() {
  return (
    <div className="bg-white p-5 w-96 m-auto mt-20 flex flex-col items-center gap-y-5">
      <img
        className="w-48"
        src="https://static.vecteezy.com/system/resources/thumbnails/068/541/149/small_2x/sad-digital-illustration-of-payment-declined-on-laptop-with-sad-emoji-face-free-png.png"
        alt="Payment Failed"
      />
      <h1 className="text-2xl text-red-500 font-bold">Payment Failed</h1>

      <NavLink
        to="/cart"
        className="border w-48 p-3 flex items-center justify-center gap-2 hover:bg-gray-200 font-bold"
      >
        <IoIosArrowRoundBack size={30} />
        Try Again
      </NavLink>
    </div>
  );
}

export default Failure;