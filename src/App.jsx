import './App.css';
import { useState } from 'react';
import Display from './Components/Display.jsx';
import Buttoncontainer from './Components/Buttoncontainer.jsx';


function App() {
 const  [calValue, setCal] = useState("")
  const onButtonClick=(buttonText)=>{
    if(buttonText === 'c'){
      setCal("");
    }
    else if(buttonText === '='){
      const result = eval(calValue);
      setCal(result.toString());
    }else{
      setCal(calValue + buttonText);
    }
  }
  return (
    <>
    <div className="calculator">
      <Display displayValue={calValue}/>
      <Buttoncontainer onButtonClick={onButtonClick }/>
      </div>
    </>
  )
}

export default App
