
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

// 함수형 컴포넌트
const Counter = () => {
  const dispatch = useDispatch(); // useDispatch() 함수를 사용하여 dispatch 함수를 가져온다. (no need to argument)
  const counter = useSelector((state) => state.counter); // useSelector() 함수를 사용하여 state.counter 값을 가져온다.
  const show = useSelector((state) => state.showCounter); 
  
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); // action을 dispatch 한다. (action을 dispatch 하면 reducer가 실행된다.
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // 숫자를 인자로 전달할 수 있다.
  }
  
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

// 클래스 컴포넌트 (자주 사용되지 않는다.)
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
