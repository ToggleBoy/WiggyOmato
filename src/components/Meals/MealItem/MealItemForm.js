import React from "react";
import Input from "../../UI/Input";
import "./MealItemForm.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const addItems = (e) => {
    e.preventDefault();
    const enteredAmount = +amountInputRef.current.value;
    if (
      amountInputRef.current.value.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };
  return (
    <form className="form" onSubmit={addItems}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
