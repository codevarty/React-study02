import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
const Expenses = (props) => {
  const [fillteredYear, setFilteredYear] = useState('2020');
  const changeFilterHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={fillteredYear} onChangeFilter={changeFilterHandler} />
        {props.items.map((express) => {
          return(
            <ExpenseItem
              key={express.id}
              title={express.title}
              amount={express.amount}
              date={express.date}
            />
          )
        })}
      </Card>
    </div>
  );
};

export default Expenses;
