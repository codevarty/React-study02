import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true); 
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // 페이지가 새로고침 되는 것을 방지한다.

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false); // amountValid를 false로 설정한다.
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          ste: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;

//  id: "amount_"+ props.id 로 id를 생성하는 이유는
//  id가 중복되면 안되기 때문이다. props.id가 없으면 id가 중보되는 문제가 발생한다.
