import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {

    let [a, setA]=useState( 1)

    const onClickHandler=()=>{
        setA(++a)
        console.log(a)
    }

    const onClickHandlerNull=()=>{
        setA(1)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandlerNull}>0</button>
        </div>
    );
}

export default App;