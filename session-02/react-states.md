# 리액트 state 및 이밴트 배우기
- name import
  - 라이브러리에서 이름이 지어진 것을 추출할 수 있다.
  - `import {name} from 'react'`
- default import
  - 기본적인 import 방법
  - `import React from 'react'`

## 1. state
- 사용자와 상호작용을 하는 동적인 웹 페이지를 만들기 위해 필요
- 별도의 state를 지정하지 않으면 컴포넌트는 정적인 웹 페지로 한번의 state만 갖는다.
- 값을 변경하기 위해서는 state가 필요함
- 리액트는 보통 컴포넌트는 한번만 실행한다.
- state는 값이 변경 되면 컴포넌트를 다시 랜더링 한다.
- `useState()`는 컴포넌트를 랜더링하는 state를 생성한다.
  - React Hook으로 불린다.
  - 반드시 컴포넌트 함수 안에서 정의 되어야 한다.
- `UseState()` 사용
  ```javascript
  import React, {useState} from 'react';
  function App() {
    // state에 기본값을 지정할 수 있다.
    const [text, setText] = useState('Hello');
    return (
      <div className="App">
        <button onClick={()=> {setText('clicked')}}> click..</button>
        <p>{text}</p>
      </div>
    );
  }
  export default App;
  ```
  - text는 state 값이다. 기본값으로 Hello를 지정
  - setText는 state를 변경하는 함수이다. text를 정함
  - useState의 첫 번째 반환값은 현재 상태를 나타냄
  - 두번째 반환값은 상태를 업데이트하는 함수이다.
- state 값을 업데이트 하는 방법
  ```javascript
  // state 값을 업데이트 하는 방법
  const handleClick = () => {
    // setState를 사용하여 state 값을 변경
    // 인자 값에는 변경할 데이터가 들어간다.
    setText('clicked')
    console.log(text); // 'hello'가 출력 된다.
  }
  ...
  ```
    - state를 업데이트하는 함수가 실행되면 컴포넌트가 랜더링 된다.
    - 함수가 호출 되자마자 state가 변경되는 것이


## 2. 이밴트
- addEventListener를 사용하지 않고도 이벤트를 다룰 수 있다.
- HTML의 이벤트 속성은 모두 on으로 시작한다.
- 모든 on props는 함수를 값으로 가진다.
- on props의 경우 동작이 되는 요소 모두 사용이 가능하다.
- 버튼을 클릭 했을 떄 이밴트를 발생 시킬려면 onClick={함수}을 사용한다.
  ```javascript
  // onClick 이벤트 값으로 함수를 전달
  <button onClick={()=> {console.log('clicked')}}> click..</button>
  // function 으로 전달
  <button onClick={function(){console.log('clicked')}}> click..</button>
  ```
  -  함수이름()를 전달 하면 JSX가 평가 될 때 실행
  -  함수 이름을 전달하면 클릭 이벤트가 발생할 때 실행

- 변수로 지정하여 변경하면 변경되지 않음
  ```javascript
  let text = props.text
  // 변수로 지정하여 변경하면 변경되지 않음
  const handleClick = () => {
    console.log('clicked');
    text = 'Hello'
  }
  <button onClick={handleClick}> text </button>
  ```
  - 컴포넌트도 함수이기 때문에 컴포넌트가 다시 반환되지 않는한 버튼이 내용은 변경되지 않는다.
  - 컴포넌트를 사용하는 것은 함수를 호충하는 것이다.