import { useNavigate } from "react-router-dom";
import success from "../../assets/Excellence.svg";

const OrderComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[438px] mt-10 sm:mt-0 m-auto mb-10">
      <div className="flex items-center justify-center">
        <img src={success} alt="" className="w-[160px] sm:w-[320px]" />
      </div>

      <p className="text-xl sm:text-3xl my-10 text-center">
        Orders Placed Successfully!
      </p>

      <button
        className="bg-black text-stone-50 text-sm sm:text-2xl font-semibold
       w-full rounded-md py-2 px-8 sm:py-5 sm:px-20"
        onClick={() => navigate("/shop")}
      >
        Return to Shop
      </button>
    </div>
  );
};

export default OrderComplete;
