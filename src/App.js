import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('')
  const [placeholder, setPlaceholder] = useState('Please enter some values')

  function onClick(event) {
    setResult(result + event.target.value)
  }
  
  function goBack() {
    setResult(result.substring(0, result.length - 1))
  }

  function calc() {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString())
      setPlaceholder("Please enter some values")
    } 
    catch (error) {
      setResult('')
      setPlaceholder("Plese enter valid values")
    }
  }

  return (
    <div className="calculator">
      <input type="text" value={result} placeholder={placeholder} onChange={(event) => setResult(event.target.value)} />
      
      <button value='0' className="zero" onClick={onClick}>0</button>
      <button value='1' className="one" onClick={onClick}>1</button>
      <button value='2' className="two" onClick={onClick}>2</button>
      <button value='3' className="three" onClick={onClick}>3</button>
      <button value='4' className="four" onClick={onClick}>4</button>
      <button value='5' className="five" onClick={onClick}>5</button>
      <button value='6' className="six" onClick={onClick}>6</button>
      <button value='7' className="seven" onClick={onClick}>7</button>
      <button value='8' className="eight" onClick={onClick}>8</button>
      <button value='9' className="nine" onClick={onClick}>9</button>
      <button value='+' className="plus" onClick={onClick}>+</button>
      <button value='-' className="minus"onClick={onClick}>-</button>
      <button value='*' className="multiply" onClick={onClick}>x</button>
      <button value='/' className="divide" onClick={onClick}>/</button>
      <button value='.' className="dot" onClick={onClick}>.</button>
      
      <button value='c' className="c" onClick={goBack}>c</button>
      <button value='clear' className="clear" onClick={() => setResult('')}>clear</button>
      <button className="result" onClick={calc}>=</button>
    </div>
  );
}

export default App;
