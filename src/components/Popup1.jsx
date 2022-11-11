import React, {useState} from "react";

const initialState = {
    time: 'start',
    title: 'Welcome to Quizz',
    text: 'This is a quiz application built using ReactJS. <br /><br /> Currently it\'s loaded with CSS questions from W3Scools, but you can easily load any type of questions into it. <br /><br /> It will dynamically load the question->answers pair and upload them into the components.' ,
    buttonText: 'Start the quiz' 
}

const Popup = ({nr, style, score, total, startQuiz, text}) => {
    console.log('score:', score);
    console.log('nr', nr);
    console.log('total: ', total);
    
    const [state, setState] = useState(initialState);

    const popupHandle = () => {
        let { time } = state;
        console.log('popUp has been called..');

        if(time === 'start'){
            setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            startQuiz();
        }else {            
            window.location.reload();// restart the application
        }
    }


    const createMarkup = (text) => {
        console.log('create markup was run..')
        console.log('text: ', text );
        return {__html: text};
    }

    return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{state.title}</h1>
                            <p dangerouslySetInnerHTML={createMarkup(text ? text: state.text)} />
                            <button className="fancy-btn" onClick={popupHandle} >{state.buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Popup;