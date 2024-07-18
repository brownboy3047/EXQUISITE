import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutCard from "../../ui/CheckoutCard";
import OrderView from "./OrderView";

const Orders: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:justify-between mb-10">
      <div>
        <p className="mb-4 text-2xl">Orders</p>

        <OrderView />
      </div>

      <div>
        <p className="mb-4 text-2xl">Orders Summary</p>

        <CheckoutCard
          buttonName="Proceed to checkout"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Orders;
