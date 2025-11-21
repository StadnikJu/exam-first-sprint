import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';


function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);
  const [count, setCount] = useState(minValue);
  const [error, setError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  function changeWindow() {
    setIsSettingsOpen(!isSettingsOpen);
  }

  const incrementCounter = () => {
    if (count < maxValue) {
      let newValue = count + 1;
      setCount(newValue);
    }
  }

  const resetCounter = () => {
    setCount(minValue);
  }

  const updateSettings = (newMin: number, newMax: number) => {
    setMinValue(newMin);
    setMaxValue(newMax);
    setCount(newMin);
  }

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue');
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setCount(newValue);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(count));
  }, [count])



  return (
    <div className='global'>

      {isSettingsOpen
        ?
        (<div className="global-window">
          <Settings
            minValue={minValue}
            maxValue={maxValue}
            updateSettings={updateSettings}
            setIsButtonDisabled={setIsButtonDisabled}
            setError={setError}
            changeWindow={changeWindow}
          />
        </div>)
        : (<div className="global-window">
          <Counter
            count={count}
            minValue={minValue}
            maxValue={maxValue}
            isButtonDisabled={isButtonDisabled}
            error={error}
            incrementCounter={incrementCounter}
            resetCounter={resetCounter}
            changeWindow={changeWindow}
          />
        </div>)}
    </div>
  )
}

export default App
