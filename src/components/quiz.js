import React, { useEffect } from "react";
import QuestionBox from "./questionBox";
import { nanoid } from "nanoid";
import Button from "./button";
import { HashLoader } from "react-spinners";

export default function Quiz(){
    const[questions,setQuestions] = React.useState([]);
    const[reset,setReset] = React.useState(false)
    const[renderQuiz,setRenderQuiz] = React.useState(false);
    React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple")
        .then(res=>res.json())
        .then(data=>setQuestions(data.results))
    }
    ,[reset])
    
    React.useEffect(()=>{
        const timer = setTimeout(()=>{
             setRenderQuiz(true)
         },3000)
      },[renderQuiz])
    console.log(renderQuiz)
    
    const ans = questions.map((obj)=>{
        return obj.correct_answer
    })
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }

    
    function handleCheck(){
        const guess = document.getElementsByClassName("selected");
        
            const all=document.getElementsByClassName("all");
            let count=0;
            for(let j=0;j<all.length;j++){
                    if(all[j].innerText===ans[count]){
                            all[j].classList.add("green")
                            count++;
                        }
                    }

                    
            const arr=[];
            for(let i = 0; i < guess.length; i++) {
                if(guess[i].innerText===ans[i]){
                    guess[i].classList.add("green")
                }
                else{
                    guess[i].classList.add("red")
                }
                arr.push(guess[i].innerText);
            }
            // document.getElementById("checkAnswers").innerText = "Play Again"
            console.log("Clicked on check answers")
        
    }

    const questionElement = questions.map((question)=>{
                 return(
                     <QuestionBox ques={question} key={nanoid()} shuffleArray={shuffleArray}/>
                 )
            });

    return(
        <>
        {renderQuiz?(
          <div id="quiz-box">
            {questionElement}
            {questions && <Button  handleCheck={handleCheck} setReset={setReset} setRenderQuiz={setRenderQuiz}/>}
          </div>)
          :
          (<HashLoader color="#4D5B9E"/>)
        }  
        </>
    );
}
