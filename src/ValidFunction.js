import React, { useState } from 'react'
import './Add.css'

function ValidFunction() {

    const [Valid, setValid] = useState({
        hobbies: ["Cricket", "Kabbadi", "Kho-Kho"],
        textarea: '',
        email: '',
        password: '',
        cPassword: '',
        checkbox: false,
        validate: '',
        validateEmail: '',
        validatePass: '',
        validateCheck: ''
    })

    const changeValue = (e) => {

        setValid({
            ...Valid,
            [e.target.name]: e.target.value,
            // validate: '',
            // validateEmail: '',
            // validatePass: '',
            // validateCheck: ''

        })
    }
    const checkbox = () => {
        setValid({
            checkbox: !Valid.checkbox,
            // validateCheck: ''
        })
    }
    const validation = (e) => {
        console.log("textbox",Valid.textarea);
        console.log("email",Valid.email);
        console.log("checkbox",Valid.checkbox);
        console.log("password",Valid.password);
        console.log("cPassword",Valid.cPassword);
        e.preventDefault()
        if (Valid.textarea === " ") {
            setValid({ validate: "please Enter your address" })
        }
        else if (Valid.email === " ") {
            setValid({ validateEmail: "please Enter your Email" })
        }
        else if (!/^\w+([-+.'][^\s]\w+)*([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(Valid.email)) {
            setValid({ validateEmail: "please Enter Valid Email" })
        }
        else if (Valid.checkbox === false) {
            setValid({ validateCheck: "you have to select one checkbox" })
        }
        else if (Valid.password !== Valid.cPassword) {
            setValid({ validatePass: "password misMatch" })
        }
        else {
            console.log("all is ok");
        }
    }
    return (
        <div>
            <form onSubmit={validation}>

                Address:  <textarea id="textarea" maxLength="60" name="textarea" value={Valid.textarea} onChange={(e) => changeValue(e)}></textarea>

                <div className="error">{Valid.validate}</div><br />
                Email:  <input name="email" value={Valid.email} onChange={(e) => changeValue(e)} />
                <div className="error">{Valid.validateEmail}</div><br />
                Password:  <input type="password" name="password" value={Valid.password} onChange={(e) => changeValue(e)} /><br />
                Confirm Password:  <input type="password" name="cPassword" value={Valid.cPassword} onChange={(e) => changeValue(e)} />
                <div className="error">{Valid.validatePass}</div><br />
                {(Valid.hobbies &&
                    Valid.hobbies.map((item) => {
                        return (
                            <>
                                <input type="checkbox" value={Valid.checkbox} onChange={(e)=>{changeValue(e)}}/>
                                 <label>{item}</label>
                            </>
                        )
                    })
                )}
                <div className="error">{Valid.validateCheck}</div><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ValidFunction
