import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// 클래스 컴포넌트는 react hook을 사용할 수 없다.
class Users extends Component {
  constructor() {
    super(); // 반드시 호출
    // state는 constructor에서 초기화
    // 무조건 모든 state는 객체여야 한다.
    this.state ={
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    // this.state = false // 이렇게 하면 안된다.
    this.setState((curState) => {
      // 객체를 반환해야 한다.
      return { showUsers: !curState.showUsers };
    });
  }
  // render 함수 안에 함수를 정의 하지 않는다.
  render() {
    
  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };


//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
