import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredError, setEnteredError] = useState();

  const errorHandler = () => {
    setEnteredError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setEnteredError({
        title: "Invalid input",
        message: "Check your input name and age (non empty value)",
      });
      return;
    }
    // enteredAge는 문자열이기 때문에 숫자로 변환
    if (+enteredAge < 1) {
      setEnteredError({
        title: "Invalid age",
        message: "Check your input age (age > 0))",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  // props의 값으로 함수를 전달 할 때 괄호를 붙이면 코드를 바로 실행하기 때문에 붙이지 않는다.
  return (
    <div>
      {enteredError ? (
        <ErrorModal
          title={enteredError.title}
          message={enteredError.message}
          onCancel={errorHandler}
        />
      ) : null}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
