import React from "react"
import ReactDOM from "react-dom/client"
//React Element is object==>when we render into dom then it become HTML element
//We can creating h1 in JSX
// hello world using JSX</h1> browser can't understanded but how it's working because of parcel this code transpiles before going to js engine 
const h1=<h1 id="heading">hello world using JSX</h1>
//React Components
//Class Based Component--OLD way
//Functional Component--New way
//React Functional component is a normal JS function which return some piece of JSX code
//Function name must be start with capital litter
//JSX sanitizing the data which prevents cross origine attacks if we get the data from API when we run it  make to steeal the data our JSX sanitizite it it run
const Fun= ()=><h1>hello</h1>
const Fun1=()=>{
    return<div>
        <h1>hello React functional Component</h1>
        <h2>Hello</h2>
        <Fun/>
    </div>
}
const n=100;
const N_Fun=function(){
    return<div>
        {n}
        <n></n>
        <h1>hello React functional Component</h1>
        <h2>Hello</h2>
        <h2>{n*100}</h2>
        {console.log(n)}
        {h1}
        <div><Fun/></div>
    </div>
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<N_Fun/>)