import React from "react"
import ReactDOM from "react-dom/client"
const h1= React.createElement("h1",{id:"heading",xhu:"ABC"},"Hello world using react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);

const Parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an H1 tag"),React.createElement("h1",{},"I'm an H1 tag")]))
root.render(Parent)
console.log(Parent);