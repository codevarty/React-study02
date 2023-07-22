const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// createStore의 매개변수로 사용하는 reducer 함수를 가진다.
const store = redux.createStore(counterReducer);

// 상태가 변경될 때마다 호출되는 함수를 등록한다.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber); // counterSubscriber 함수를 등록한다.

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
