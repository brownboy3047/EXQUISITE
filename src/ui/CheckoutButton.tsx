import React from "react";

interface CheckoutButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disable?: boolean;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  children,
  onClick,
  disable,
}) => {
  return (
    <button
      disabled={disable}
      className="bg-black text-stone-50 py-2 px-2 sm:py-2 sm:px-5 mt-5 rounded-lg w-full 
      sm:w-[299px] text-xs disabled:cursor-not-allowed disabled:bg-black disabled:bg-opacity-10 disabled:text-red-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CheckoutButton;
