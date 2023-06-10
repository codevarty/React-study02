# Fragments, Portals & Refs

- 많은 문제를 해결해주기 위한 리액트 도구들

## JSX Limitations & Fragments

- React는 JSX를 사용
- JSX는 컴포넌트를 반환하는 코드

- JSX의 제한 사항

  - 반드시 루트 엘리먼트가 있어야 함
  - JSX는 React.createElement()로 변환으로 단 하나의 React.createElement()로 반환 됨

- 해결방법

  - 인접한 요소를 div 태그로 감싸는 방법
  - 반드시 div일 필요가 없음
  - 배열을 통해서 해결 가능 -> 비효율적

- 새로운 문제 사항
  - div soup 발생: div가 많아지면 DOM이 복잡해짐s
    ```javascript
    return (
      <div>
        <div>
          <div>
            <h1>My App</h1>
            <p>Some content</p>
          </div>
        </div>
      </div>
    );
    ```
  - css 사용에 제한이 생김
  - 많은 태그 사용으로 애플리케이션이 느려짐

- Wrapper 컴포넌트 생성
  - Wrapper 컴포넌트를 만들어서 사용
  - 아무런 의미가 없는 div => Wrapper로 변경해서 사용
  - div soup 문제를 해결하는 속임수
    ```javascript
    return (
      <Wrapper>
        <h1>My App</h1>
        <p>Some content</p>
      </Wrapper>
    );
    ```

- Fragments
  - Wrapper 컴포넌트를 사용하지 않고 해결 가능
  - React에서 자체적으로 제공하는 기능
    ```javascript
    // Fragment 사용
    return (
      <React.Fragment>
        <h1>My App</h1>
        <p>Some content</p>
      </React.Fragment>
    );
    ```
    ```javascript
    // 빈구문 사용
    return (
      <>
        <h1>My App</h1>
        <p>Some content</p>
      </>
    );
    ```
    - 위 두 방법음 동일하게 사용


## Getting a Cleaner DOM with Portals

- portals를 사용하는 이유
  - DOM의 특정 위치에 렌더링을 할 수 있음
  - 다른 컴포넌트 안에서 사용 되서 DOM이 복잡해지는 것을 방지
  - 코드를 더 깔끔하게 만들어 줌
  - root div 위에 렌더링을 할 수 있음

- portals 사용
  - portals는 react-dom에서 제공
  - ReactDOM.createPortal() 함수를 사용
    - 매개변수로 두가지를 제공
    - 첫 번째 매개변수: 렌더링 할 요소(JSX 코드로 작성)
    - 두 번째 매개변수: 렌더링 할 위치
      ```javascript
      ReactDOM.createPortal(
        <h1>My Portal</h1>,
        /*portal-root  요소 안에 랜더링*/
        document.getElementById('portal-root')
      );
      ```
- portals 특징
  - portals는 DOM의 특정 위치에 렌더링을 할 수 있음
  - portals는 어디서든 사용 가능

## Working with Refs
