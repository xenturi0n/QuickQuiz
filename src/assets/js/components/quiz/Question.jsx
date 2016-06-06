import React from 'react';

function handleOnChange(e){
    console.log(">>>>>> Change");
}

function renderChoices(choices, id){
    return(choices.map((choice, index)=>{
        return(
            <li className="list-group-item" key={index}>
                {choice.id} <input type="radio" onChange={handleOnChange.bind(this)} name={id} value={id}/> {choice.text}
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
                {renderChoices(question.choices, question.id)}
            </ul>
        </div>
    );
}

export default Question;