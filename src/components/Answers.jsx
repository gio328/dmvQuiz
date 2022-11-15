import React, {useState, useEffect} from "react";

const Answers = ({answers, question, correct, img, showButton, answerButtonStyles, isAnswered, increaseScore, mistakes}) => {

    const [state, setState] = useState({ isAnswered: false, answerButtonStyles});
   
    const checkAnswer = (e) => {
        
        if(!isAnswered) {
            let elem = e.currentTarget;
            let answer = Number(elem.dataset.id);
            let changeStyle = answerButtonStyles;

            if(answer === correct){
                changeStyle[answer-1] = 'right';
                increaseScore();
            }
            else {
                changeStyle[answer-1] = 'wrong';
                mistakes.push({question: question, answers: answers, correct: correct, img: img});
                console.log('mistakes: ', mistakes);
            }
            
            setState({
                ...state,
                answerButtonStyles: changeStyle 
            })

            showButton();
        }
    }

    useEffect( () => {
        state.answerButtonStyles = ['', '', '', ''];
    },[state.answerButtonStyles]);
    //useEffect( () => () => console.log("unmount"), [] );

    return (
        <div id="answers">
            <ul>
                 <li onClick={checkAnswer} className={state.answerButtonStyles[0]} data-id="1"><span>A</span> <p>{answers? answers[0] : ''}</p></li>
                 <li onClick={checkAnswer} className={state.answerButtonStyles[1]} data-id="2"><span>B</span> <p>{answers? answers[1] : ''}</p></li>
                 <li onClick={checkAnswer} className={state.answerButtonStyles[2]} data-id="3"><span>C</span> <p>{answers? answers[2] : ''}</p></li>
                 <li onClick={checkAnswer} className={state.answerButtonStyles[3]} data-id="4"><span>D</span> <p>{answers? answers[3] : ''}</p></li>
           </ul>
       </div>
    )
    
}


export default Answers;