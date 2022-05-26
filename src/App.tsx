import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber:string,age:number) => {
        console.log(subscriber,age)
    }
    const Button2Foo = (subscriber:string,age:number) => {
        console.log(subscriber,age)
    }
    const StupidButton = () => {
        console.log('I am stupid Button')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChannel-1'} callBack={()=>(Button1Foo('Vasya',21))}/>
            <Button name={'MyYouTubeChannel-2'} callBack={()=>(Button2Foo('Ivan',32))}/>
            <Button name={'Stupid Button'} callBack={StupidButton}/>
        </div>
    );
}

export default App;