import React, {useState} from "react";


const QuestionContainer = ({question,options,selected}) =>{
    const [answer,setAnswer] = useState(options);
    return(
        <div className="questionCon">
            <div className="question">{question}</div>
            {answer.map((text,index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={() =>{
                        setAnswer([text]);
                        selected(text);
                    }}

                    >
                    {text}
                </button>
            ))}
        </div>
    )
};

export default QuestionContainer;
