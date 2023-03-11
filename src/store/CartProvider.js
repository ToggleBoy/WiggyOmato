import React from "react";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemsIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItems = state.items[existingCartItemsIndex];

    let updatesItems;

    if (existingCartItems) {
      const updatedItem = {
        ...existingCartItems,
        amount: existingCartItems.amount + action.item.amount,
      };
      updatesItems = [...state.items];
      updatesItems[existingCartItemsIndex] = updatedItem;
    } else {
      updatesItems = state.items.concat(action.item);
    }

    return {
      items: updatesItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemsIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    const existingCartItems = state.items[existingCartItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItems.price;
    let updatesItems;
    if (existingCartItems.amount === 1) {
      updatesItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    }else {
      const updatedItem = {...existingCartItems, amount:existingCartItems.amount -1};
      updatesItems = [...state.items]
      updatesItems[existingCartItemsIndex] = updatedItem
    }
    return {
      items: updatesItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeitemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCartHandler,
    removeitem: removeitemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
