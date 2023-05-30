# 랜더링 리스트 및 조건부 Content

## 1. 데이터 랜더링 목록
- 동적으으로 데이터를 랜더링해야 함
- JSX 구문에서 동적인 부분을 실행할 때 중괄호 {}를 사용
- map()함수를 사용. map 함수는 배열의 각 요소를 변환하여 새로운 배열을 생성
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  // 배열의 요소 만큼 반복하여 새로운 배열을 생성
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  ```
- keys
  - 먼저 요소를 추가할 때는 마지막에 요소의 추가하고 위치를 업데이트 한다.
  - key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
  - 각 컴포넌트를 식별할 수 있게 함
  - 효율적으로 업데이트가 가능함
  - 모든 mapping 요소애는 key를 포함해야 함
  - key는 고유해야 함
  ```javascript
  const todoItems = todos.map((todo) =>
    /* key 속성은 고유해야 함*/
    <li key={todo.id}>
      {todo.text}
    </li>
  );
  ```