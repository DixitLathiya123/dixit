import React, { Component } from 'react'
import './Add.css'
export default class Valid extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
        }
    }
    changeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            validate: "",
            validateEmail: "",
            validatePass: '',
            validateCheck: ''

        })
    }
    checkbox = () => {
        this.setState({
            checkbox: !this.state.checkbox,
            validateCheck: ""
        })
    }
    validation = (e) => {
        e.preventDefault()
        if (this.state.textarea === "") {
            this.setState({ validate: "please Enter your address" })
        }
        else if (this.state.email == "") {
            this.setState({ validateEmail: "please Enter your Email" })
        }
        else if (!/^\w+([-+.'][^\s]\w+)*([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.state.email)) {
            this.setState({ validateEmail: "please Enter Valid Email" })
        }
        else if (this.state.checkbox === false) {
            this.setState({ validateCheck: "you have to select one checkbox" })
        }
        else if(this.state.password !== this.state.cPassword){
            this.setState({ validatePass: "password misMatch" })
        }
        else {
            this.setState({ validateCheck: "", validate: "" })
            console.log("all is ok");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.validation}>
                    Address:  <textarea id="textarea" maxLength="60" name="textarea" value={this.state.textarea} onChange={this.changeValue}></textarea>
                    <div className="error">{this.state.validate}</div><br />
                    Email:  <input name="email" value={this.state.email} onChange={this.changeValue} />
                    <div className="error">{this.state.validateEmail}</div><br />
                    Password:  <input type="password" name="password" value={this.state.password} onChange={this.changeValue} /><br />
                    Confirm Password:  <input type="password" name="cPassword" value={this.state.cPassword} onChange={this.changeValue} />
                    <div className="error">{this.state.validatePass}</div><br />
                    {
                        this.state.hobbies.map((item) => {
                            return (
                                <>
                                    <input  name="checkbox" type="checkbox" value={item} onClick={this.checkbox} />
                                    <label>{item}</label>
                                    <br />
                                </>
                            )
                        })
                    }
                    <div className="error">{this.state.validateCheck}</div><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}