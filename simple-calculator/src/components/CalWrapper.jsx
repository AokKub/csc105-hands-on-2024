import React from 'react'
import { useState } from 'react'

function CalWrapper() {
    const [result, setResult] = useState(0);
    const [value, setValue] = useState(0);
    function add(){
        if (value){
            setResult(parseInt(result)+parseInt(value));
            setValue(0);
        }
    }

    function subtract(){
        if (value){
            setResult(parseInt(result)-parseInt(value));
            setValue(0);
        }
    }

    function multiply(){
        if (value){
            setResult(parseInt(result)*parseInt(value));
            setValue(0);
        }
    }
    
    function divide(){
        if (value){
            setResult(parseInt(result)/parseInt(value));
            setValue(0);
        }
    }

    function add(){
        if (value){
            setResult(parseInt(result)+parseInt(value));
            setValue(0);
        }
    }
    return (
    <div>
        <h1>Simple Calculator</h1><br/>
        <h3>{result}</h3><br></br>
        
            <input placeholder='enter number' type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={add}>add</button>
            <button onClick={subtract}>subtract</button>
            <button onClick={multiply}>multiply</button>
            <button onClick={divide}>divide</button>
            <button onClick={()=>{setValue(0)}}>reset input</button>
            <button onClick={()=>{setResult(0)}}>reset result</button>
    </div>
  )
}

export default CalWrapper