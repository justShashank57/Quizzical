import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div id="rootSon">
  <img id="yellow" src="yellow.png"></img>
  <App/>
  <img id="blue" src="blue.png"></img>
  </div>
)