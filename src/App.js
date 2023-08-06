import React from "react";
import Main from "./components/main";

import Quiz from "./components/quiz";

export default function App(){
    const [show,setShow]=React.useState(true);
    function handleClick(){
        setShow(prevState=>!prevState)
    }
    return (<>
        { show && <Main handleClick={handleClick}/>}
        { !show && <Quiz/>}
    </>
    )
}