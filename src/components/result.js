import React from "react";


const Result = ({score,Replay}) =>(
    <div className="score-board">
        <div className="score">You score {score} out of 5 questions </div>
        <button className="playBtn" onClick={Replay}>
            Replay!
        </button>
    </div>
);


export default Result;