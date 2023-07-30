import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});


export default store; // 외부에서 사용할 수 있도록 export 한다.

// 관리를 쉽게하기 위해서 각 slice를 별도의 파일로 분리한다.
// index.js 파일은 main store를 정의하는 파일이다.
