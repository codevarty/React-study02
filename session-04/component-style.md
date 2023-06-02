# 리액트 컴포넌트 스타일링링

## 1. 조건 & 동적 스타일
- 조건에 따라 다른 스타일을 적용
- style 속성에 객체를 전달 이 때 조건문을 적용
  ```javascript
  <div style={{ color: active ? 'green' : 'black' }}></div>
  ```
  - active의 값이 true이면 green, false이면 black
- inline stye을 쓰면 코드가 길어지고, css 파일의 코드를 재사용한다. 

- 클래스를 통해 style 동적으로 추가
  - className 값을 객체로 한다.
  - className 값이 true이면 해당 클래스가 적용된다.
  ```javascript
  <div className={`box ${active ? 'active' : ''}`}></div>
  ```
  - active가 true이면 box active 클래스가 적용된다.
  - ${} 키워드를 사용해서 클래스를 동적으로 작용한다.

## 2. styled-components
- inline style의 문제점
  - 전역 파일로 작동하기 때문에 클래스명이 같으면 적용이 된다.
  - 클래스명을 지을 때 고유한 이름을 지어야 한다.

- styled-components는 css를 js 파일에 작성하는 방식
  - js 파일에 css를 작성한다.
  - `npm install --save styled-components`를 터미널에 입력하여 설치

- 구문
  - `styled.태그명`을 사용하여 스타일을 적용한다. 뒤에 백틱(`)을 두번 붙인다.
    - 태그명에는 HTML의 태그가 들어간다.
    - 각 고유의 클래스를 생성한다. => 컴포넌트마다 클래스가 서로 다름
    - &는 가상 선택자로 자기 자신을 선택한다.
    ```javascript
    const Button = styled.button`
      style-code..
    `

## 3. css module