import React from 'react';


const ScoreBox = (props) => {
    return(
        <div className="well">
            Question {props.current} out of {props.questions.length} <div className="pull-right"><strong>Score: {props.score}</strong></div>
        </div>
    );
}


export default ScoreBox;