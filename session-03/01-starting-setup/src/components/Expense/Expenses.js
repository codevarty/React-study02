import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
const Expenses = (props) => {
  const [fillteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  // 연도별로 필터링
  const filteredExpenses = props.items.filter(
    (express) => express.date.getFullYear().toString() === fillteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={fillteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
