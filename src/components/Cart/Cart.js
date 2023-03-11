import React, { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeitem(id)
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}

        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.closeCart}>
          close
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
