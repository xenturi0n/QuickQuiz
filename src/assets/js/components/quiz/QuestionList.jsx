import React from 'react';

import Question from './Question.jsx';

function renderQuestions(questions, current, props) {
    return(questions.map((question)=>{
        if(question.id == current){
            return(
                <div className="row" key={question.id}>
                    <div className="col-xs-12">
                        <Question question={question} {...props}/>
                    </div>
                </div>
            );
        }
    }));
}

const QuestionList = (props) => {
    const { questions, current } = props;
    
    return(
        <div className="questions">
            {renderQuestions(questions, current, props)}
        </div>
    );
}

export default QuestionList;