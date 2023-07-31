# 고급 리덕스
## 비동기 처리 방법
- reducer 함수는 반드시 순수 함수여야 한다.
- reducer 함수는 동기적으로 동작해야 한다.
- 비동기 처리 방법
  - useEffect를 사용하여 컴포넌트에 직접 비동기 로직 작성
  - 리덕스 툴킷을 사용하지 않고 action creator를 만들어서 비동기 로직 작성
## Redux devtools