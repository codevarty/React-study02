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

## Getting a Cleaner DOM with Portals

## Working with Refs
