import { createStore } from 'redux';

// 객체 형태로 state를 정의하기 때문에 여러개의 state를 정의할 수 있다.
const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if(action.type === 'increment') {
    /*
    **아래와 같이 기존의 state를 변경하는 것 주의!!**

    state.counter++;
    return state;
    OR
    return {
      counter: state.counter
      showCounter: state.showCounter,
    }
     */
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if(action.type === 'increase') {
    return {
      counter: state.counter + action.amount, // action 객체에 amount 값을 추가해서 동적으로 값을 변경할 수 있다.
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    }
  }
  return state;
}

const store = createStore(counterReducer);

export default store; // 외부에서 사용할 수 있도록 export 한다.