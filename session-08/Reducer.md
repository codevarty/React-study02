# 고급 리듀서(Reducer)를 사용하여 부작용 처리 & 컨텍스트 API 사용하기

## 1. Working with (side) Effects
- Effect = side effect
- 화면에 보여주는 것 외에 다른 것들
- Store Data in Browser Storage
- Send Http Requests
- 일반적인 컴포넌트 함수 밖에서 실행
- useEffect()를 사용
  - 의존성 배열에 있는 값이 변경될 때만 실행
  - useEffect(() => {...}, [dependencies]) 형태
    - 첫번째 인수: 실행할 함수
    - 두번째 인수: 의존성 배열

- useEffect 사용 예
  ```javascript
    useEffect(() => {
      const timer = setTimeout(() => {
        setHttpState({
          loading: false,
          error: null,
        });
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }, [sendRequest]);
  ```
  - sendRequest가 변경될 때만 실행

- side effect 설명
  - 키 입력을 듣고 입력된 데이터르 저장하는 것
  - 입력을 통한 응답으로 다른 액션을 하는 것

## 2. Managing more Complex State with Reducers

## 3. Managing App-Wide or Component-Wide State with the Context