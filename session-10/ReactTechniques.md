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

## State & State update
