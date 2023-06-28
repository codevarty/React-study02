import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  // 오류 경계 메소드 생성
  componentDidCatch(error) {
    console.log(error);
    // 오류가 발생하면 hasError를 true로 설정
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) { 
      return <p>Appearing Error!</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
