import React from 'react';
import Answers from './Answers';
import Popup from './Popup';
import Footer from './Footer';
import BoldText from './BoldText';



class Main extends React.Component {
    constructor(props) {
        super(props);
        
        this.data = this.props.data;
        this.state = {
            nr: 0,
            total: this.data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'flex',
            answerButtonStyles: ['', '', '', ''],
            text: '',
            retake: false
            //containerKey: 1
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
        //this.handleSetContainerKey = this.handleSetContainerKey.bind(this);
    }

    pushData(nr) {
        //console.log('data: ',this.data)
        this.setState({
            question: this.data[nr].question,
            answers: [this.data[nr].answers[0], this.data[nr].answers[1], this.data[nr].answers[2], this.data[nr].answers[3] ],
            correct: this.data[nr].correct,
            img: this.data[nr].img,
            nr: this.state.nr + 1
        });
    }

    componentDidMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    componentDidUpdate(){
        console.log('state: ', this.state);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;
        
        if(nr === total){
            this.setState({
                displayPopup: 'flex',
                text: `You have completed the practice test. \n You got ${score} out of ${total} question(s).`
            });
            if(score < total){
                this.setState({
                    retake: true
                })
            }
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }

        this.resetStyles();

    }

    resetStyles = () => {
        this.setState({answerButtonStyles: ['', '', '', '']})
    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            nr: 1
        });
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1
        });
    }


    render() {
        let { nr, total, question, answers, correct, img,  showButton, questionAnswered,  answerButtonStyles, displayPopup, text, retake} = this.state;
        //console.log('img: ', img);
        return (
            <div  className="container">
                <Popup style={{display: displayPopup}} resetKey={this.props.resetKey}  retake={retake} text={text} startQuiz={this.handleStartQuiz} score={this.state.score} total={total}/>

                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <div id="question">
                            <h4>Question {nr}/{total}</h4>
                            <p>{question}</p>
                            <p>{img}</p>
                        </div>
                        <Answers mistakes={this.props.mistakes} answers={answers} question={question} correct={correct} img={img} showButton={this.handleShowButton} answerButtonStyles={answerButtonStyles} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore}/>
                        <div id="submit">
                              {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr===total ? 'Finish quiz' : 'Next question'}</button> : null}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Main
