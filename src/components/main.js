import React from "react";
export default function Main(props){
    return(
        <div className="main_1">
            <h1 className="quiz-title">Quizzical</h1>
            <h5>Are you ready to test yourself?</h5>
            <button className="start-button" onClick={props.handleClick}>Start quiz</button>
        </div>
    )
}