import React from 'react';

import Question from './Question.jsx';

function renderQuestions(questions) {
    return(questions.map((question)=>{
        return(
                <div className="row" key={question.id}>
                    <div className="col-xs-12">
                        <Question question={question}/>
                    </div>
                </div>
            );
    }));
}

const QuestionList = (props) => {
    const { questions } = props;
    
    return(
        <div className="questions">
            {renderQuestions(questions)}
        </div>
    );
}

export default QuestionList;