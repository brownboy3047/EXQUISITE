import { useContext } from "react";
import { CartContext, ContextProps } from "../context/CartContext";

// export const useCartContext = () => {
//     const context = useContext(CartContext);

//     if (context === undefined)
//       throw new Error(
//         "ActionContext is not use within the ActionContextProvider"
//       );

//     return context;
// }

export const useCartContext: () => ContextProps = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCartContext must be used within CartContextProvider");
  }
  return context;
};
