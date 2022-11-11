import React, {useState} from "react";
import DataComponent from "../data/DataComponent";

const initialState = {
    time: 'start',
    title: 'Welcome to DMV Practice Test',
    text: 'This App Will Simulate DMV Computer Test. \n \n Galingan mo love ko. I Love you' ,
    buttonText: 'Start the Test' 
}

const Popup = ({ style, resetKey, startQuiz, text, retake, score, total}) => {
   
    //console.log('retake: ', retake );
    const [state, setState] = useState(initialState);

    const popupHandle = () => {
        let { time } = state;
        //console.log('popUp has been called..');

        if(time === 'start'){
            setState({
                time: 'end',
                title: 'Finish!',
                buttonText: 'Restart'
            });
            startQuiz();
        }else {            
            window.location.reload();// restart the application
        }
    }

    const mistakesHandle = () => {
        DataComponent(retake);
        resetKey(retake);
        //setContainerKey();
        //return <App />
    }

    const displayEmoji = () => {
        const grade = (score/total) * 100;
        if (state.time === 'start') return <p>&#128536; &#128536; &#128536;</p>
        if (grade >= 99){
            return <p>&#129321; &#128525; &#128536;</p>
        }else if( grade >= 0 ){
            return <p>&#128532; &#128542; &#128546; &#128557;</p>
        }
        
    }

    return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{state.title}</h1>
                            <p className="text-wrapper">{text ? text: state.text}</p> {/*text-wrapper class - css for making \n line break*/}
                            {displayEmoji()}
                            { retake ? <button className="fancy-btn"  onClick={mistakesHandle}  >Retake Mistakes</button> : ''}
                            <button className="fancy-btn" onClick={popupHandle} >{state.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Popup;