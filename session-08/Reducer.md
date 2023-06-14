# 고급 리듀서(Reducer)를 사용하여 부작용 처리 & 컨텍스트 API 사용하기

## 1. Working with (side) Effects
- Effect = side effect
- 화면에 보여주는 것 외에 다른 것들
- Store Data in Browser Storage
- Send Http Requests
- 일반적인 컴포넌트 함수 밖에서 실행
- useEffect()를 사용
  - 의존성 배열에 있는 값이 변경될 때만 실행
  - useEffect(() => {...}, [dependencies]) 형태
    - 첫번째 인수: 실행할 함수
    - 두번째 인수: 의존성 배열

- useEffect 사용 예
  ```javascript
    useEffect(() => {
      const timer = setTimeout(() => {
        setHttpState({
          loading: false,
          error: null,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, [sendRequest]);
  ```
  - sendRequest가 변경될 때만 실행

- Effect에서의 clean 작업
  - useEffect() 함수 안에서 불필요한 state 변경을 하면 많은 네트워크 트래픽이 발생할 수 있음
  - 디바운싱 작업: 사용자의 입력이 끝나고 일정 시간이 지난 후에만 요청을 보내는 것
  - useEffect() 함수의 return 값으로 clean up 함수를 반환
  - clean up 함수 실행 사점
    - 컴포넌트가 unmount 되기 직전
    - useEffect() 함수가 다시 실행되기 직전: 처음 실행 제외
    - clean up 함수를 통해 한번의 데이터만 요청하도록 함
  ```javascript
    useEffect(()=> {
      실행 코드
      // 클린 코드에 의해 실행 코드는 한번만 실행됨
      return () => {
        clean up 코드
      }
    }, [변경될 값])
  ```
- side effect 설명
  - 키 입력을 듣고 입력된 데이터르 저장하는 것
  - 입력을 통한 응답으로 다른 액션을 하는 것

## 2. Managing more Complex State with Reducers
- userReducer(): state 관리를 도와주는 함수
  - 두 개 이상의 state를 관리할 때 사용
  - state를 업데이트 할 떼 reducer 함수를 사용

- useReducer 구문
  - const [state, dispatch] = useReducer(reducer, initialState, init);
  - state: state 객체 최신 값
  - dispatch: state를 업데이트 하는 함수
  - reducer: state 스냅샷을 자동으로 가져오는 함수 action을 통해 state를 업데이트. 업데이트 된 state를 반환
  - initialState: state 객체의 초기 값
  - init: 초기 state 객체를 만드는 함수

- useState() VS useReducer()
  - useState()
    -  state 관리 도구
    -  개별 state 및 데이터를 다루기에 적합하다.
    -  state 업데이트가 쉽고 적은 state를 관리할 때 사용
 -  useReducer()
    - 복잡한 state를 관리할 때 사용
    - 연관된 state를 그룹화 할 수 있다.
    - 많은 state를 관리할 때 사용

## 3. Managing App-Wide or Component-Wide State with the Context
- ContextAPI 를 사용하지 않을 때의 문제점
  - 컴포넌트 트리의 많은 컴포넌트를 거쳐야 함
  - 데이터 통신을 위해 불필요한 컴포넌트 연결이 발생한다.
  - state를 전역으로 관리 필요
