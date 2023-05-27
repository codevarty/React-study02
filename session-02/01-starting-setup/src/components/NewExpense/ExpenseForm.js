import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // 빈 믄자열을 기본값으로 설정
  // event.target.value의 값은 문자열
  const [enteredTile, setEnteredTile] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTile: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTile(event.target.value);
    // input 태그에 값을 입력할 때마다 콘솔에 출력
    // setUserInput({
    //   // 기존 값 복사
    //   ...userInput,
    //   // 변경되는 값은 마지막에 작성
    //   enteredTile: event.target.value,
    // });
    // 이전 상태값을 사용해야 할 때는 함수형 업데이트를 사용
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTile: event.target.value };
    // });
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  //기존 form은 submit 될 때마다 새로고침이 된다.
  const submitHandler = (event) => {
    event.preventDefault(); // 새로 고침 방지

    // 객체 생성
    const expenseData = {
      title: enteredTile,
      amount: enteredAmount,
      date: new Date(enteredDate),
  };
  console.log(expenseData);
};

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
