import React, { useState } from "react";
import { CollectionType, collections } from "../data/collectionData";

//assets
import heart from "../assets/suits/favorite.svg";
import { useCartContext } from "../hooks/useCartContext";

const type = [
  { id: 1, label: "all" },
  { id: 2, label: "blazer" },
  { id: 3, label: "double breasted", name: "Afolabi Mabunmi" },
  { id: 4, label: "peak lapel" },
  { id: 5, label: "ventless" },
  { id: 6, label: "shawl laperl" },
];

const Shop: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("all");
  const [selectedCollection, setSelectedCollection] =
    useState<CollectionType[]>(collections);

  //   const [selectedItems, setSelectedItems] = useState<CollectionType[]>([]);
  const {
    selectedItems: cart,
    setSelectedItems,
    selectedFavorite: favorite,
    setSelectedFavorite,
  } = useCartContext();

  const handleClick = (label: string) => {
    setSelectedLabel(label);

    // setSelectedCollection(
    //   collections.filter((items) => items.collections === label)
    // );

    if (label === "all") {
      setSelectedCollection(collections);
    } else {
      setSelectedCollection(
        collections.filter((items) => items.collections === label)
      );
    }
  };

  const handleSelectItem = (selected: CollectionType) => {
    setSelectedItems([...cart, selected]);

    localStorage.setItem("cart", JSON.stringify([...cart, selected]));
  };

  const handleRemoveItem = (selected: CollectionType) => {
    setSelectedItems(cart.filter((prod) => prod.id !== selected.id));

    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((prod) => prod.id !== selected.id))
    );
  };

  const handleAddFavorite = (selected: CollectionType) => {
    setSelectedFavorite([...favorite, selected]);

    localStorage.setItem("favorite", JSON.stringify([...favorite, selected]));
  };

  const handleAddRemoveFavorite = (selected: CollectionType) => {
    setSelectedFavorite(favorite.filter((fav) => fav.id !== selected.id));

    localStorage.setItem(
      "favorite",
      JSON.stringify(favorite.filter((fav) => fav.id !== selected.id))
    );
  };

  return (
    <div className="mt-4 px-3 lg:px-16 mb-5">
      <h1 className="uppercase text-3xl font-balthazar mb-4">Collections</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <ul className="flex flex-row flex-wrap md:flex-col gap-2">
          {type.map((list) => (
            <li
              key={list.id}
              className={`border w-[70px] md:w-[219px] rounded-lg p-2 text-center md:p-5 cursor-pointer 
                uppercase text-[10px] md:text-base ${
                  selectedLabel === list.label ? "bg-black text-white" : ""
                }`}
              onClick={() => handleClick(list.label)}
            >
              {list.label}
            </li>
          ))}
        </ul>

        <ul
          className="w-full md:w-[900px] h-[620px] md:h-[841px] border border-black py-[10px] px-[15px] md:py-[30px] md:px-[40px] rounded-2xl 
        flex flex-wrap gap-10  md:justify-start sm:gap-5 overflow-y-scroll"
        >
          {selectedCollection &&
            selectedCollection.map((collection) => (
              <li
                key={collection.id}
                // className="w-[130px] sm:w-[250px] flex flex-row gap-4 sm:flex-col"
                className="w-full sm:w-[250px]"
              >
                <img src={collection.photo} alt="suit" className="w-full" />

                <div>
                  <div className="flex flex-col gap-1 md:flex-row md:items-center justify-between mt-2">
                    <p className="font-medium capitalize text-xs md:text-base">
                      {collection.collections}
                    </p>
                    <p className="text-sm md:text-lg font-semibold">
                      #{collection.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between mt-2">
                    {cart.some((product) => product.id === collection.id) ? (
                      <button
                        className="py-[7px] px-[6px] rounded-lg bg-red-600 text-white text-[8px] sm:text-[10px] outline-none"
                        onClick={() => handleRemoveItem(collection)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="py-[5px] px-[8px] rounded-lg bg-black text-white text-[10px] sm:text-sm outline-none"
                        onClick={() => handleSelectItem(collection)}
                      >
                        Add to cart
                      </button>
                    )}

                    {/* button to add and remove favorite */}
                    {favorite.some((fav) => fav.id === collection.id) ? (
                      <button
                        className="py-[5px] px-[8px] rounded-lg bg-black bg-opacity-10 text-red-600 
                  text-[10px] sm:text-sm flex items-center justify-center gap-[6px] outline-none"
                        onClick={() => handleAddRemoveFavorite(collection)}
                      >
                        <span className="">Remove Favorite</span>
                        {/* <img src={heart} alt="heart" /> */}
                      </button>
                    ) : (
                      <button
                        className="py-[5px] px-[8px] rounded-lg bg-black bg-opacity-10 text-black 
                text-[10px] sm:text-sm flex items-center justify-center gap-[6px] outline-none"
                        onClick={() => handleAddFavorite(collection)}
                      >
                        <span className="">Add to Favorite</span>
                        <img src={heart} alt="heart" />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
