import { NavLink, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const location = useLocation();
  const totalPrice = location.state?.total;

  if (!totalPrice) {
    return (
      <div className="text-center mt-20 text-red-500">
        Invalid payment request
      </div>
    );
  }

  const transaction_uuid = uuidv4();
  const message = `total_amount=${totalPrice},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  const hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="bg-gray-300 w-[500px] p-8 mt-20 mb-20 m-auto flex flex-col items-center gap-5">
      <form
        className="space-y-3 text-end"
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input type="hidden" name="amount" value={totalPrice} />
        <input type="hidden" name="tax_amount" value="0" />
        <input type="hidden" name="total_amount" value={totalPrice} />
        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
        <input type="hidden" name="product_code" value="EPAYTEST" />
        <input type="hidden" name="product_service_charge" value="0" />
        <input type="hidden" name="product_delivery_charge" value="0" />
        <input
          type="hidden"
          name="success_url"
          value="http://localhost:5173/success"
        />
        <input
          type="hidden"
          name="failure_url"
          value="http://localhost:5173/failure"
        />
        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
        />
        <input type="hidden" name="signature" value={signature} />

        <h1 className="text-4xl font-bold text-orange-600 text-center">
          Rs. {totalPrice}
        </h1>
    
        <input
          className="bg-green-700 rounded-full text-white p-2.5 w-40 cursor-pointer"
          value="Pay Via eSewa"
          type="submit"
        />
      </form>

      <NavLink
        to="/cart"
        className="bg-yellow-400 px-6 py-3  rounded font-semibold"
      >
        Back to Cart
      </NavLink>
    </div>
  );
}

export default Payment;