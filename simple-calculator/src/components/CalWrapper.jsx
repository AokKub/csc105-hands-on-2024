import React from 'react'
import { useState } from 'react'
import '../styles/cal.css'

function CalWrapper() {
    const [result, setResult] = useState(0);
    const [value, setValue] = useState(0);
    function add() {
        if (value) {
            setResult(parseInt(result) + parseInt(value));
            setValue(0);
        }
    }

    function subtract() {
        if (value) {
            setResult(parseInt(result) - parseInt(value));
            setValue(0);
        }
    }

    function multiply() {
        if (value) {
            setResult(parseInt(result) * parseInt(value));
            setValue(0);
        }
    }

    function divide() {
        if (value) {
            setResult(parseInt(result) / parseInt(value));
            setValue(0);
        }
    }

    return (
        <div id="bg">
            <div id="result">
                <div>
                    <h1>Simple Calculator</h1><br />
                </div>
                <div>

                    <h3>{result}</h3><br></br>
                </div>
                <div>
                    <input placeholder='enter number' type="number" value={value} onChange={(e) => setValue(e.target.value)} />

                </div>

            </div>
            <div>

                <button onClick={add}>add</button>
                <button onClick={subtract}>subtract</button>
                <button onClick={multiply}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={() => { setValue(0) }}>reset input</button>
                <button onClick={() => { setResult(0) }}>reset result</button>
            </div>
        </div>
    )
}

export default CalWrapper
