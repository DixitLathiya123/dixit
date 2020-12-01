import React, { useState } from 'react'

function FieldAdd() {
    const [state, setstate] = useState({
        field: ["name", "id", "age"],
        selectbox: ["vehical", "city"],
        final:["name", "id", "age"]
    })
    const selectChange = (e) => {
        
            setstate({
                ...state,
                final: [...state.final, e.target.value]
            })
        }
    
    const add = () => {
            const arr = [...new Set(state.final)]
            setstate({
                ...state,
                field: arr
            })
        }
    return (
        <div>
            <table border="1 px solid black">
                <thead>
                    <tr>
                        {
                            state.field.map((item) => <th> {item} </th>)
                        }
                    </tr>
                </thead>
            </table>
            <select onChange={(e) => { selectChange(e) }} >
                <option>   ---select field ---</option>
                {
                    state.selectbox.map((item) => <option value={item}>{item}</option>)
                }
            </select>
            <button onClick={()=>add()}>Add</button>
        </div>
    )
}
export default FieldAdd
