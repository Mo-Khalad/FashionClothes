import React, { useReducer } from "react";
import { CartContext } from "./CartContext.js";

const handleProductReducer = (state, action) => {
  if (action.type === "add-item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updateItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    } else updateItems.push({ ...action.item, quantity: 1 });
    return { ...state, items: updateItems };
  }
  if (action.type === "remove-item") {
    let updateItems = [...state.items]; 
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      updateItems.splice(existingCartItemIndex, 1);
    } else {
      const existingItem = state.items[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updateItems[existingCartItemIndex] = updateItem;
    }
    
    return { ...state, items: updateItems };

  }
  if(action.type ==="remove-all"){
      return { ...state, items: [] };
  };
  }

const CartContextProvider = ({ children }) => {
  const item = JSON.parse(localStorage.getItem("items"))
  const [cart , dispatchCartAction] = useReducer(handleProductReducer, {
   items: item === null ? [] : item,
  });
  const addProduct = (item) => {
    dispatchCartAction({
      type: "add-item",
      item: item,
    });
  };
  const removeProducts = (id) => {
    dispatchCartAction({
      type: "remove-item",
      id: id,
    });
  };
const removeAll =()=>{
  dispatchCartAction({
    type: "remove-all"
  });
}
  return (
    <>
      <CartContext.Provider
        value={{
          item: cart.items,
          addProduct,
          removeProducts,
          removeAll ,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
