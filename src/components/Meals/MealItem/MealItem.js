import React ,{ useContext }from "react";
import "./MealItem.css";
import MealItemForm from "./MealItemForm";

import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price: props.price
    })
  } ;

  return (
    <li key={props.id} className="meal">
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm  onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
