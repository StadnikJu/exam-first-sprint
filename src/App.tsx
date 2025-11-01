import { useState } from 'react';
import './App.css';
import { Count } from './components/Count';

function App() {
  const minCounter = 0;
  const maxCounter = 5;
  const[counter, setCounter] = useState(minCounter);

  function incrementCont() {
    if(counter < maxCounter){
      const newCounter = counter + 1;
      setCounter(newCounter);
    }
  }

  function resetCount() {
    setCounter(minCounter);
  }

  return (
    <div className="global-window">
      <Count incrementCount={incrementCont}
             resetCount={resetCount}
             counter={counter}
             maxCounter={maxCounter}
             minCounter={minCounter}
      />
    </div>
  )
}

export default App
