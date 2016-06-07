import React from 'react';

function handleOnChange(e, props){
    e.preventDefault();
    const{setCurrent, setScore, question, score, current}=props;
    let selected = e.target.value;
    
    console.log(selected, question.correct);
    if(selected == question.correct){
        setScore(score+1);
    }
    
    setCurrent(current+1);
}

function renderChoices(choices, id, props){
    return(choices.map((choice, index)=>{
        return(
            <li className="list-group-item" key={index}>
                {choice.id} <input type="radio" onChange={(e)=>{handleOnChange(e,props)}} name={id} value={choice.id}/> {choice.text}
            </li>
        );
    }));
}

const Question = (props) => {
    const { question } = props;
    
    return(
        
        <div className="well">
            <h3>{question.text}</h3>
            <hr/>
            <ul className="list-group">
                {renderChoices(question.choices, question.id, props)}
            </ul>
        </div>
    );
}

export default Question;