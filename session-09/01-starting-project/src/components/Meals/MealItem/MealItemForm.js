import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+ props.id,
          type: "number",
          min: "1",
          max: "5",
          ste: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

//  id: "amount_"+ props.id 로 id를 생성하는 이유는
//  id가 중복되면 안되기 때문이다. props.id가 없으면 id가 중보되는 문제가 발생한다.
