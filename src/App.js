import { useState } from 'react';
import Main from './components/main';
//import DataComponent from '../data/DataComponent';
import dmvData from './data/dmvData';
import './App.css';


function App({reset, key}) {
  const [resetKey, setResetKey] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [data, setData] = useState(dmvData);
  

  const handleReset = (retake) => {
    setResetKey(resetKey + 1);
    console.log('mistakes: ', mistakes );
    if (retake) {
      setData(mistakes);
      setMistakes([]);
    }
  }
  
  return (
    <div className="App">
       <Main key={resetKey} resetKey={handleReset} data={data} mistakes={mistakes} setMistakes={setMistakes} />
    </div>
  );
}

export default App;
