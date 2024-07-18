import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

const OrderView: React.FC = () => {
  const { selectedItems, setSelectedItems } = useCartContext();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    setSelectedItems(selectedItems.filter((order) => order.id !== id));
  };

  return (
    <ul className="w-full lg:w-[730px] rounded-2xl border">
      {selectedItems.length > 0 ? (
        selectedItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row gap-5 border-b p-3 lg:p-5"
          >
            <img src={item.photo} alt="suit" />

            <div>
              <h3 className="text-xs lg:text-lg font-medium mb-3">
                {item.collections}
              </h3>

              <p className="text-base lg:text-2xl font-semibold">
                #{item.price}
              </p>

              <div className="flex items-center gap-4 my-2">
                {/* <img src={minus} alt="minus" className="border" /> */}
                <p className="border border-black p-2 rounded-full cursor-pointer font-bold">
                  -
                </p>
                <p className="bg-black bg-opacity-10 p-2 rounded-full font-bold">
                  1
                </p>
                <p className="border border-black bg-black text-white p-2 rounded-full cursor-pointer font-bold">
                  +
                </p>
              </div>

              <button
                className="w-[116px] py-2 px-4 rounded-lg bg-black bg-opacity-10 mt-4"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      ) : (
        <div className="text-center mt-5 border-b p-10">
          <p>
            Cart is Empty. click{" "}
            <span
              className="font-medium cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              Here
            </span>{" "}
            to shop
          </p>
        </div>
      )}
    </ul>
  );
};

export default OrderView;
