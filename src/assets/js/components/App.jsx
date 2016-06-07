import React, {Component, PropTypes} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import ScoreBox from './quiz/ScoreBox.jsx';

class App extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Alfonso'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Steven'
                        },
                    ],
                    correct: 'a'
                },
                {
                    id: 2,
                    text: 'What is your mother´s name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Donna'
                        },
                        {
                            id: 'b',
                            text: 'Guadalupe'
                        },
                        {
                            id: 'c',
                            text: 'Patricia'
                        },
                    ],
                    correct: 'b'
                },
                {
                    id: 3,
                    text: 'What is your fathers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Jhon'
                        },
                        {
                            id: 'b',
                            text: 'Piter'
                        },
                        {
                            id: 'c',
                            text: 'Don Gorgonio'
                        },
                    ],
                    correct: 'c'
                },
                {
                    id: 4,
                    text: 'What is your Boss name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Paul'
                        },
                        {
                            id: 'c',
                            text: 'Tyson'
                        },
                    ],
                    correct: 'c'
                }
            ],
            score: 0,
            current: 1
        }
    }
    
    _setCurrent(current){
        this.setState({current: current});
    }
    
    _setScore(score){
        this.setState({score: score});
    }
    
    render(){
        return(
            <div>
                {this.state.current > this.state.questions.length ? null : <ScoreBox {...this.state}/>}
                <QuestionList {...this.state} setCurrent={this._setCurrent.bind(this)} setScore={this._setScore.bind(this)}/>
            </div>
        );
    }
}

export default App;