import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((express) => (
        <ExpenseItem
          key={express.id}
          title={express.title}
          amount={express.amount}
          date={express.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
