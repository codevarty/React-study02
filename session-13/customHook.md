# 커스텀 리액트 Hook 빌드

## 1. 커스텀 Hook 정의
- 커스텀 Hook은 컴포넌트 함수 내부에서만 사용 가능
- 커스텀 Hook은 `use`로 시작하는 함수
- 상태를 설정하는 로직을 내장하는 함수
- 커스텀 Hook은 재사용 가능한 함수

## 2. 커스텀 Hook 만들기
- 컴포넌트와 마찬가지로 별도의 파일로 관리
- 커스텀 Hook은 `use`로 시작하는 이름을 반드시 상용 -> 커스텀 Hook이라는 것을 리액트갸 알 수 있음
- 반환값을 지정할 수 있음
- 커스텀 Hook안에 다른 Hook을 호출할 수 있음
  ```javascript
  // useInputs.js
  import { useState, useCallback } from 'react';
  function useInputs(initialForm) {
    const [input, setInput] = useState(initialForm);

  // 변경 코드..s
    return input;
  }
  export default useInputs;
  ```
- 커스텀 Hook을 통해 상태를 관리하는 코드를 다른 컴포넌트에서도 사용할 수 있음

## 결론
- 커스텀 Hook을 만들어서 사용하면 코드의 재사용성을 높일 수 있음