import React from 'react';

const AddUser =  props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }
  // props의 값으로 함수를 전달 할 때 괄호를 붙이면 코드를 바로 실행하기 때문에 붙이지 않는다.
  return (
  <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id="username" type="text"  />
    <label htmlFor="age">Age (years)</label>
    <input id="age" type="number"  />
    <button type="submit">Add User</button>
  </form>
  );
};

export default AddUser;