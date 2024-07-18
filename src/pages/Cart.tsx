import React from "react";

//assets
import arrow from "../assets/arrowBack.svg";
import { Outlet, useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-3 lg:px-16">
      <img
        src={arrow}
        alt="arrow"
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Cart;
