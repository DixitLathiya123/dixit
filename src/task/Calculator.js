import React, { useState } from 'react'

function Calculator() {
    const [state, setstate] = useState({
        a: '',
        b: '',
        select: '',
        output: ''
    })
    const inputHandler = (e) => {
        console.log("e.target.name",e.target.name);
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = () => {
        if (state.select === "sum") {
            const dummy = parseInt(state.a) + parseInt(state.b)
            setstate({
                ...state,
                output: dummy
            })
        }
        else if (state.select === "sub") {
            const dummy = parseInt(state.a) - parseInt(state.b)
            setstate({
                ...state,
                output: dummy
            })
        }
        else if (state.select === "div") {
            const dummy = parseInt(state.a) / parseInt(state.b)
            setstate({
                ...state,
                output: dummy
            })
        }
        else if (state.select === "mul") {
            const dummy = parseInt(state.a) * parseInt(state.b)
            setstate({
                ...state,
                output: dummy
            })
        }
    }
    return (
        <div>
            <input type="text" name="a" onChange={(e) => { inputHandler(e) }} />
            <select onChange={(e) => { inputHandler(e) }} name="select">
                <option select value="sum">+</option>
                <option value="sub">-</option>
                <option value="div">/</option>
                <option value="mul">*</option>
            </select>
            <input type="text" name="b" onChange={(e) => { inputHandler(e) }} />
            <button onClick={(e) => { submitHandler(e) }}>submit</button>
            <p>{state.output}</p>
        </div>
    )
}

export default Calculator
