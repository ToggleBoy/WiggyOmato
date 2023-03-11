import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";


const HeaderCartButton = (props) => {
  const [highlighted, setHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return ( curNumber + item.amount)
  },0)

  const {items} = cartCtx;

  useEffect(() => {
    if(items.length === 0) {
      return;
    }
    setHighlighted(true)
    const timer = setTimeout(()=>{
      setHighlighted(false)
    },300)

    return () => {
      clearTimeout(timer)
    }
  },[items])

  return (
    <button className={'button '+ (highlighted ? "bump" : '')} onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
