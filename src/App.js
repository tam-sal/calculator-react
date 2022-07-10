import './App.css';
import fccLogo from './images/freecodecamp-logo.png';
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const addInput = val => {
    setInput(input + val)
  }

  const getResult = () => {
    if (input) {
      setInput(evaluate(input))
    }
    else {
      alert('Please enter a valid value!')
    }
  }

  return (
    <div className="App">

      <div className="fcc-log-container">
        <img className='fcc-logo-img'
          src={fccLogo}
          alt="FCC Logo" />
      </div>

      <div className="calculator-container">
        <Screen
          input={input}
        />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={getResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>


      </div>

    </div>
  );
}

export default App;
