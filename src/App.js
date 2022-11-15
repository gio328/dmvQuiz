import { useState, useEffect } from 'react';
import Main from './components/main';
//import DataComponent from '../data/DataComponent';
import dmvData from './data/dmvData';
import './App.css';


function App({reset, key}) {
  const [resetKey, setResetKey] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [data, setData] = useState(dmvData);
  const [repeat, setRepeat] = useState('flex');  
  const [popupInitialState, setPopupInitialState] = useState({
    time: 'start',
    title: 'Welcome to DMV Practice Test',
    text: 'This App Will Simulate DMV Computer Test. \n \n Galingan mo love ko. I Love you' ,
    buttonText: 'Start the Test' 
  })

  const handleReset = (retake) => {
    setResetKey(resetKey + 1);
    if (retake) {
      setRepeat('none');
      setData(mistakes);
      setMistakes([]);
      setPopupInitialState({
        title: 'Finish!',
        buttonText: 'Restart' 
      })
    }
  }

  // useEffect( () => {
  //       console.log('displayPopup: ', displayPopup);
  // }, [displayPopup]);
  
  return (
    <div className="App">
       <Main key={resetKey} resetKey={handleReset} data={data} mistakes={mistakes} 
       setMistakes={setMistakes} repeat={repeat} popupInitialState={popupInitialState} />
    </div>
  );
}

export default App;
