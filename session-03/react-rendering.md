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
  - props로 받는 값 중 고유한 값을 key로 사용
  ```javascript
  const todoItems = todos.map((todo) =>
    /* key 속성은 고유해야 함*/
    <li key={todo.id}>
      {todo.text}
    </li>
  );
  ```

## 2. 조건부 컨텐츠
- 조건에 따라 각기 다른 내용을 출력
- 상항 연산자 또는 조건부 표현식을 사용
  ```javascript
  return
  // JSX 코드
  // 삼항 연산자
  {value ? <h1>True</h1> : <h1>False</h1>}
  // 조건부 표현식
  {value && <h1>True</h1>}
  ```
  - 위 코드 중에 삼항 연산자 부분은 value가 true이거나 false일 때 다른 내용을 출력
  - 조건부 표현식은 value가 true일 때만 출력
- 변수에 JSX 값을 저장해서 조건부 랜더링하기
- JSX를 변수에 저장하고 if문을 사용하여 조건부 랜더링
  ```javascript
  // 변수에 JSX 코드 저장 가능
  let isTrue = <h1>True</h1>;
  return (
    {isTrue}
  )
  ```

## 3. 요소 스타일 동적 변경
- 컴포넌트에 style이라는 속성을 추가한다.
- style 속성에 동적으로 스타일을 변경할 수 있음
- 속성의 값은 이중 괄호를 작성하는 데 자바스크립트 값을 동적으로 작성하기 위해 사용
  ```javascript
  <div style={{background: "red", "margin-bottom": "10px"}}>
  ```
  - 위 코드에서 속성 키를 정의할 때 따옴표를 사용해도 되지만 안해도 된다.
  - 속성 키가 -로 구분되어 있으면 따옴표를 사용해야 한다.