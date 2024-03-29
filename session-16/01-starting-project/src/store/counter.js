import { createSlice } from "@reduxjs/toolkit";

// 객체 형태로 state를 정의하기 때문에 여러개의 state를 정의할 수 있다.
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", // slice의 이름을 정의한다.
  initialState: initialCounterState, // 초기 state를 정의한다. (위에서 정의한 initialState를 사용한다.)
  reducers: {
    // reducer를 정의한다.
    increment(state) {
      state.counter++; // state를 직접 변경해도 된다. => immer.js 라이브러리를 사용하기 때문에 가능하다.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // action 객체에 amount 값을 추가해서 동적으로 값을 변경할 수 있다.
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
