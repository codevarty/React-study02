import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [expenseForm, setExpenseForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const cancelHandler = () => {
    setExpenseForm(false);
  };
  // 속성 이름을 on으로 지정하면 함수를 값으로 넣는 속성으로 생각
  return (
    <div className="new-expense">
      {!expenseForm ? (
        <button onClick={() => setExpenseForm(true)}>Add new Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
