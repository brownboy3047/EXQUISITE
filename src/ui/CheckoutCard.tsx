import { useNavigate } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

const CheckoutCard = () => {
  const { selectedItems } = useCartContext();
  const navigate = useNavigate();

  const subTotal = selectedItems.reduce((acc, item) => acc + item.price, 0);
  const discount = Number((subTotal * 0.1).toFixed(2));
  const total = (subTotal + discount + 20000).toFixed(2);

  return (
    <div className="w-full sm:w-[380px] py-4 px-6 rounded-lg border">
      <input
        type="text"
        placeholder="Add a coupon code"
        className="w-full sm:w-[299px] 
            border-[0.5px] border-black outline-none rounded-lg py-[15px] px-[30px]"
      />

      <div className="flex items-center justify-between w-full sm:w-[299px] mt-3">
        <p>Sub Total</p>
        {/* <p>#1,330,000.00</p> */}
        <p>#{subTotal}</p>
      </div>

      <div className="flex items-center justify-between w-full sm:w-[299px] mt-3">
        <p>Discount</p>
        {/* <p>#50,000.00</p> */}
        <p>#{discount}</p>
      </div>

      <div className="flex items-center justify-between w-full sm:w-[299px] mt-3 border-b pb-3">
        <p>Delivery Fee</p>
        <p>#20,000.00</p>
      </div>

      <div className="flex items-center justify-between w-full sm:w-[299px] mt-2 font-semibold text-sm sm:text-2xl">
        <p>Total</p>
        {/* <p>#1,400,00.00</p> */}
        <p>#{total}</p>
      </div>

      <button
        className="bg-black text-stone-50 py-2 px-2 sm:py-2 sm:px-5 mt-5 rounded-lg w-full sm:w-[299px] text-xs"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutCard;
