import React from "react";
export default function Button(props){
    const[showPlayAgain,setshowPlayAgain]=React.useState(false);    
    function check(){
       const guessLen = document.getElementsByClassName("selected").length
       if(guessLen!==5){
           alert("All questions are compulsary !!")
        }
        else{
            props.handleCheck();
            setshowPlayAgain(prevState=>!prevState);
        }
    }

    function playAgain(){
        setshowPlayAgain(prevState=>!prevState)
        props.setRenderQuiz(false)
        props.setReset(prevState=>!prevState);
        console.log("clicked on playagain")
    }

    return(
        <>
        <button id="checkAnswers" onClick={showPlayAgain?playAgain:check}>{showPlayAgain?"Play Again":"Check Answers"}</button>
        </>
    )
} 