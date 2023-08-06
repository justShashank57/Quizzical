import React from "react";
import { decode } from "html-entities";

export default function QuestionBox(props){
   
    const [clickedIndex, setClickedIndex] = React.useState(-1);
    const [shuffledArray, setShuffledArray] = React.useState([]);

    function handleClick(index){
         setClickedIndex(index)
    }
    React.useEffect(() => {
      const options = [
        decode(props.ques.correct_answer),
        ...props.ques.incorrect_answers.map((answer) => decode(answer))
      ];
      const shuffledOptions = props.shuffleArray(options);
      setShuffledArray(shuffledOptions);
    }, []);

    const obj = props.ques;
      return (
        <div id="question">
            {decode(obj.question)}
            <ul>
                {shuffledArray.map((option,index)=>{
                  return(
                    <li >
                        <button
                        onClick={(event) => handleClick(index)}
                        className={clickedIndex===index?"selected all":"option_box all"}
                        >{option}</button>
                    </li>
                  )
                  })}
            </ul>
            <hr/>
        </div>
      )
}