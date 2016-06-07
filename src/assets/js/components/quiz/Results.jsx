import React from 'react';


const Results = (props) => {
    var percent = ((props.score / props.questions.length) * 100);
    if(percent > 80){
        var message = 'Awesome Job!';
    }else if(percent < 80 && percent > 60){
        var message = 'You Did Ok!';
    }else{
        var message = 'You Did Horrible!';
    }
    return(
        <div className="well">
            <h4>You Got {props.score} out of {props.questions.length} Correct.</h4>
            <h1>{percent}% - {message}</h1>
            <a href="/">Take Again</a>
        </div>
    );
}


export default Results;