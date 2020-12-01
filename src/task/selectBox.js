import React,{useState} from 'react'

function SelectBox() {
    const [states, setstates] = useState({
        select:["name","age","city"],
        otherbox:[]
    })
    const selectChange = (e) => {
        setstates({
            ...states,
            otherbox:[
                ...states.otherbox,
                e.target.value
            ]
        })
    }
    return (
        <div>
            <select multiple onChange={(e)=>{selectChange(e)}}>
            {
                states.select.map(item => <option>{item}</option>)
            }
            </select>
            <select multiple>
            {
                states.otherbox.map(item => <option>{item}</option>)
            }
            </select>
        </div>
    )
}

export default SelectBox
