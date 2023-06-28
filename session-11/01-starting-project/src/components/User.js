import {Component} from 'react';
import classes from './User.module.css';

// 클래스 컴포넌트는 props를 this.props로 접근
// 함수형 컴포넌트와 기능적으로 동일
class User extends Component {
  componentWillUnmount() {
    console.log('이 컴포넌트느 곳 언마운트 된다.')
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
