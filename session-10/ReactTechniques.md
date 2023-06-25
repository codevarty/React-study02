# React 최적화 태크닉

## React behind the scenes
- 리액트는 사용자 인터페이스 구축, 자바스크립트 라이브러리
- 리액트는 컴포넌트 기반으로 구성
- 리액트 DOM은 사용자 인터페이스를 빌드하기 위한 가상 DOM을 구현
- 리액트 DOM은 변경이 필요한 부분만 실제 DOM에 반영
- 리액트의 가상 DOM이 변경 실제 DOM과 차이점만 실제 DOM에 반영(변경)

### React Components
- 컴포넌트를 통해 DOM을 구성
- 부모 컴포넌트가 랜더링 되면 자식 컴포넌트도 랜더링
  - 랜더링 되는 자식 컴포넌트의 자식 컴포넌트도 랜더링

- React.memo
  - 컴포넌트의 props가 변경되지 않으면 랜더링을 방지
  - 불필요한 컴포넌트 랜더링 방지
  - memo의 인자로 전달된 컴포넌트는 props가 변경이 되면 랜더링
  - 과도한 memo의 사용은 메모리를 많이 사용 -> 비용이 많이 들어 성능 저하
  - props가 함수인경우 다시 생성이 되기 때문에 불필요한 랜더링이 발생 => useCallback 사용

- useCallback 
  - 함수의 재생성을 방지
  - 메모리에 저장된 함수를 재사용
  - 두번째 인자는 의존성 배열 == useEffect의 인자와 동일
  - 메모리상에 저장된 함수를 재사용하기 때문에 과도한 사용은 메모리를 많이 사용
  - 의존성 배열을 지정하는 이유
    - 의존성 배열에 지정된 값이 변경되면 함수를 재생성
    - 의존성을 지정하지 않으면 함수를 재생성하지 않기 때문에 최신의 값을 사용하지 못함

- 클로저
  - 함수가 생성될 당시의 스코프를 기억하는 함수
  - 구문 
    ```javascript
    function outer() {
      const outerVar = 'outerVar';
      function inner() {
        const innerVar = 'innerVar';
        console.log(outerVar);
      }
      return inner;
    }
    const innerFunc = outer();
    innerFunc(); // outerVar
    ```
    - innerFunc는 outer 함수의 스코프를 기억

## State & State update
- state
  - 컴포넌트 상태 저장
  - state 변경 함수를 통해 변경하면 바로 변경되는 것이 아니라 예약
  - 변화를 시킬 때 우선순위를 정해서 예약된 작업을 실행
  - 이전 상태를 기반으로 업데이트 할 때에는 함수를 인자로 전달 -> 함수형 업데이트    

- useState
  - 컴포넌트 상태를 저장하기 위한 Hook
  - 처음 컴포넌트가 랜더링 될 때만 초기화

- useMemo
  - 함수가 계속해서 호출되는 것을 방지
  - 불필요한 계산을 방지
  - 두번째 인자는 의존성 배열 == useEffect의 인자와 동일
  - 배열과 같은 참조형 데이터를 useMemo를 사용해서 다시 생성되는 것을 방지
  - useMemo는 메모리를 사용하기 때문에 과도한 사용은 성능 저하


## 결론
- 위의 기술들은 잘 사용되지 않지만 특정 상황에서 사용하면 성능 향상에 도움이 됨