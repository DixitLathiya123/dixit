import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    const status = localStorage.getItem("token")
    
    const [Login, setLogin] = useState({
        username: '',
        password: '',
        status: ''
    })

    const changeForm = (e) => {
        setLogin({
            ...Login,
            [e.target.name]: e.target.value
        })
    }

    const buttonChange = () => {
        if (Login.username === "admin" && Login.password === "123" && Login.status === "admin") {
            localStorage.setItem("token", "admin")
            history.push("/admin")
        }
        else if (Login.username === "dixit" && Login.password === "123" && Login.status === "customer") {
            localStorage.setItem("token", "customer")
            history.push("/customer")
        }
    }

    return (
        <div>
            <form>
                Username:<input type="text" name="username" onChange={(e) => changeForm(e)} /><br />
                Password:<input type="text" name="password" onChange={(e) => changeForm(e)} /><br />
                status:<select name="status" onChange={(e) => changeForm(e)} >
                    <option >--- select your status ---</option>
                    <option value="admin">admin</option>
                    <option value="customer">customer</option>
                </select><br />
                <button type="button" value="Login" onClick={() => { buttonChange() }}>Login</button>
            </form>
        </div>
    )
}

export default Login