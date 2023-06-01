import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilterHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  // 연도별로 필터링
  const filteredExpenses = props.items.filter(
    (express) => express.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
