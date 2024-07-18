import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";
import CheckoutCard from "../../ui/CheckoutCard";
import ContactForm from "../../ui/ContactForm";
import ShoppingForm from "../../ui/ShoppingForm";
import PaymentForm from "../../ui/PaymentForm";

const Checkout: React.FC = () => {
  const { setSelectedItems } = useCartContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setSelectedItems([]);
    navigate("/success");
  };
  return (
    <div className="mb-10">
      <p className="mb-4 text-2xl">Checkout</p>

      <div className="flex flex-col gap-5 lg:flex-row justify-between">
        <div className="w-full md:w-[700px] border rounded-lg py-5 px-[25px]">
          {/* Contact infomation */}
          <div>
            <ContactForm />
          </div>

          {/* Shopping Details */}
          <div className="mt-4">
            <ShoppingForm />
          </div>

          {/* Payment Form */}
          <div className="mt-4">
            <PaymentForm />
          </div>
        </div>

        <div>
          <CheckoutCard buttonName="Checkout" onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
