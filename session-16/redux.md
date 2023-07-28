# 리덕스 라이브러리

## 리덕스 라이브러리 사용 및 방법

### 리덕스 정의

- 리덕스는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너
- 리덕스는 상태를 관리하는 라이브러리

### 리액트 3가지 상태

- local state
  - 컴포넌트 내에 사용가능한 상태
  - 보통 useState, useReducer를 사용하여 관리
- cross component state
  - 다수의 컴포넌트에 영향을 미치는 상태
  - props chain, prop drilling을 사용하여 관리
- App-wide state

  - 앱 전체에 영향을 미치는 상태
  - props chain, prop drilling을 사용하여 관리

- 위의 상태들 중 cross component state와 App-wide state를 관리하기 위해 리덕스를 사용

### 리액트 컨텍스트 대신 리덕스 사용 이유

- 리액트 컨텍스트 잠재적 단점
  - 컨텍스트를 사용할 때 상태 관리가 복잡해질 수 있음
  - 데이터가 자주 변경되는 경우 리액트 컨텍스트는 성능이 떨어질 수 있음

### 리덕스 작동 방식

- 리덕스는 한 개의 스토어를 가짐(리액트 앱의 모든 상태 데이터를 가짐)
- 컴포넌트에서 상태를 가져오는 것을 구독(subscribe)이라고 함
- 상태를 변경하는 방법 (직접 변경 불가능)
  - Reducer 함수를 사용한다. is Not useReducer
  - 컴포넌트에서 액션을 디스패치(dispatch)한다.
  - 디스패치된 액션은 리듀서 함수에 전달된다.

### 리덕스 설치 및 사용

- `npm install redux`명령어로 리덕스 설치
- 리액트와 함께 사용하기 위해 `npm install redux react-redux`명령어로 react-redux도 함께 설치
- `const redux = require('redux')`로 리덕스 불러오기 (node.js 구문)
- Reducer 함수
  - 항상 순수 함수여야 한다. (순수 함수: 입력 값이 같으면 항상 같은 결과를 반환하는 함수)
  - 매개변수: Old state, Dispatched Action
  - 리턴값: New state Object (새로운 상태 객체)
- Store
  - `createStore()`함수를 사용하여 스토어 생성
  - `store.getState()`함수를 사용하여 스토어의 상태를 가져올 수 있음
- subscribe
  - `store.subscribe()`함수를 사용하여 스토어의 상태가 변경될 때마다 호출되는 함수를 등록할 수 있음
- dispatch
  - `store.dispatch()`함수를 사용하여 액션을 디스패치할 수 있음
- 리액트 앱에서 리덕스 사용
  - `import { Provider } from 'react-redux'`로 리덕스 불러오기 (상단의 컴포넌트를 감싸준다.)
  - `useSelector` 함수를 사용하여 리덕스 스토어의 상태를 가져올 수 있음 (argument: function , return: state)
  - `useDispatch` 함수를 사용하여 리덕스 스토어의 액션을 디스패치할 수 있음 (argument: Not need, return: function)
- 클래스 컴포넌트에서 리덕스 사용
  - `connect` 함수를 통해 리덕스 스토어의 상태와 액션을 props로 매핑할 수 있음
    - `export defualt connect(mapStateToProps, mapDispatchToProps)(Component))` 형태로 사용
    - `mapStateToProps` 함수를 사용하여 리덕스 스토어의 상태를 props로 매핑할 수 있음
    - `mapDispatchToProps` 함수를 사용하여 리덕스 스토어의 액션을 props로 매핑할 수 있음
  - `this.props.dispatch()`함수를 사용하여 액션을 디스패치할 수 있음
  - `this.props.state`함수를 사용하여 리덕스 스토어의 상태를 가져올 수 있음
- state를 변경할 때 절대로 기존의 state를 변경하면 안됨 (항상 새로운 객체를 만들어서 반환해야 한다.)

## 리덕스 사용 Toolkit
- 리덕스 사용을 쉽게 해주는 라이브러리
- 기존 리덕스 사용 문제점을 쉽게 해결해줌
- `npm install @reduxjs/toolkit` 명령어로 설치

- `createslice` 함수를 사용하여 리듀서 함수와 액션을 한 번에 생성할 수 있음
  - `createSlice` 함수의 매개변수로 리듀서 함수의 이름과 초기 상태 객체를 전달
    ```javascript
    createSlice({
      name: '이름',
      initialState: {초기 상태 객체},
      reducers: {
        // 직접 state를 변경할 수 있음
        리듀서 함수 이름: (state, action) => {state 변경}
      }
    })
    ```
  - 리듀서 함수의 이름을 사용하여 액션을 디스패치할 수 있음

- `configureStore` 함수를 사용하여 스토어를 생성할 수 있음
  - `configureStore` 함수의 매개변수로 리듀서 함수를 전달
  - 여러개의 리듀서 함수를 전달할 수 있음
  ```javascript
  configureStore({
    reducer: 리듀서 함수
    // 여러개의 리듀서 함수를 전달할 수 있음
    // reducer: {리듀서 함수1, 리듀서 함수2}
  })
  ```