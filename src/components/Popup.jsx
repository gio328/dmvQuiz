import React, {useEffect, useState} from "react";

const Popup = ({ style, resetKey, startQuiz, text, retake, score, total, popupInitialState}) => {
   
    const [state, setState] = useState(popupInitialState);

    const popupHandle = () => {
        let { time } = state;

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
        setState({
            time: 'end',
            title: 'Finish!',
            buttonText: 'Restart'
        })
        resetKey(retake);

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