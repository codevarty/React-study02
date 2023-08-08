# 고급 리덕스

## 비동기 처리 방법

- reducer 함수는 반드시 순수 함수여야 한다.
- reducer 함수는 동기적으로 동작해야 한다.
- 비동기 처리 방법
  - useEffect를 사용하여 컴포넌트에 직접 비동기 로직 작성
  - 리덕스 툴킷을 사용하지 않고 action creator를 만들어서 비동기 로직 작성
  - 프론트엔드에서 백엔드로 전송한 다음 리덕스에서 백엔드의 응답을 받아와서 처리 (프론트 엔드의 작업량 증가)
- useEffect를 사용하여 비동기 로직 작성
  - state가 변경될 때 마다 비동기 로직이 실행된다.
  ```javascript
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  ```
  - 단점: 앱이 시작할 때 빈 state를 백엔드에 보내서 데이터를 덮을 수 있다.
- action creator를 사용하여 비동기 로직 작성
  - thunk를 사용하여 비동기 로직을 작성한다.
  - thunk는 작업을 지연 시키는 함수이다.
  - thunk를 사용하면 action creator에서 함수를 반환할 수 있다.
  ```javascript
  export const sendCartData = (cart) => {
    return (dispatch) => {
      dispatch(
        // send cart data
        //code...
      );
    };
  };
  ```
  - 단점: thunk를 사용하면 action creator가 비동기 로직을 처리하기 때문에 action creator가 무거워진다.

## Redux devtools
- 리덕스 개발자 도구
  - 크롬 확장프로그램 설치
  - redux devtools를 통해 store의 state 및 변경 이력을 확인할 수 있다.
  - 리덕스 상태 변화를 디버깅할 수 있다.
