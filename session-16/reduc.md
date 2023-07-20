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


## 리덕스 사용 Toolkit