import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  console.log('RUNNING!');
  const toggleParagraphHandler = () => {
    //state가 변경될 때 마다 컴포넌트가 재실행 된다.
    setShowParagraph((prevParagraph) => !prevParagraph);
  }
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
// 실제 변경 되는 부분은 DemoOutput 컴포넌트이다.
// 그러나 state가 App.js에서 변경 되므로 App.js 컴포넌트가 재실행 된다.
