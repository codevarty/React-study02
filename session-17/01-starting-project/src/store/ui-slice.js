import {createSlice} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {cartVisible: false},
  reducers: {
    toggle(state) {
      // 원래  reducer 함수에는 state를 직접 수정하는 코드가 들어가지 않는다.
      state.cartVisible = !state.cartVisible;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;