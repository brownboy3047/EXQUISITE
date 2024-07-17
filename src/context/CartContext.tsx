import React, { createContext, useState } from "react";
import { CollectionType } from "../data/collectionData";

export interface ContextProps {
  selectedItems: CollectionType[];
  setSelectedItems: (selected: CollectionType[]) => void;
  selectedFavorite: CollectionType[];
  setSelectedFavorite: (selected: CollectionType[]) => void;
}

export const CartContext = createContext<ContextProps | null>(null);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedItems, setSelectedItems] = useState<CollectionType[]>([]);
  const [selectedFavorite, setSelectedFavorite] = useState<CollectionType[]>(
    []
  );

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
        selectedFavorite,
        setSelectedFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
