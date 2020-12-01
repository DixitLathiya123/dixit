import React, { Component } from 'react'
import './Add.css'

export default class SecondValidForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lists: [],
            errors: {
                nameError: '',
                genderError: '',
                cityError: '',
                emailError: '',
                dateError: '',
                passwordError: ''
            },
            genderList: ["male", "female"],
            formFeild: {
                name: '',
                gender: '',
                city: '',
                email: '',
                birthDate: '',
                password: ''
            },
            isSubmit: false,
            show: false
        }
    }
    changeHandler = (e) => {
        this.setState({
            ...this.state,
            formFeild: {
                ...this.state.formFeild,
                [e.target.name]: e.target.value
            },
            errors: {
                nameError: '',
                genderError: '',
                cityError: '',
                emailError: '',
                dateError: '',
            },
        })
    }
    validation = (e) => {
        e.preventDefault()
        if (this.state.formFeild.name === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    nameError: "please Enter your Name"
                }
            })
        }
        else if (this.state.formFeild.gender === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    genderError: "please Select your Gender"
                }
            })
        }
        else if (this.state.formFeild.city === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    cityError: "please Enter your City"
                }
            })
        }
        else if (this.state.formFeild.email === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    emailError: "please Enter your Email"
                }
            })
        }
        else if (!/^\w+([-+.'][^\s]\w+)*([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.state.formFeild.email)) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    emailError: "please Enter Valid Email"
                }
            })
        }
        else if (this.state.formFeild.birthDate === undefined) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    dateError: "please Enter your DateOfBirth"
                }
            })
        }
        else if (this.state.formFeild.password === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    passwordError: "please Enter your password"
                }
            })
        }
        else if (this.state.formFeild.password.length < 6) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    passwordError: "Your Password Length Must Be Atleast 6"
                }
            })
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(this.state.formFeild.password)) {
            this.setState({
                errors: {
                    ...this.state.errors,
                    passwordError: "Poor Password"
                }
            })
        }
        else {
            this.setState({
                ...this.state,
                lists: [...this.state.lists, this.state.formFeild],
                isSubmit: true
            })
        }
    }
    showPassword = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }
    render() {
        return (
            <>
                <div className="width-100 d-flex">
                    <div className="width-50">
                        <form onSubmit={this.validation}>

                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.changeHandler}
                            />
                            <div className="error">{this.state.errors.nameError}</div>
                            <br />

                            {
                                this.state.genderList.map((item) => {
                                    return (
                                        <>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value={item}
                                                onChange={this.changeHandler}
                                            />
                                            <label>{item}</label><br />
                                            <br />
                                        </>
                                    )
                                })
                            }
                            <div className="error">{this.state.errors.genderError}</div>

                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.changeHandler}
                            />
                            <div className="error">{this.state.errors.cityError}</div>
                            <br />

                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                            />
                            <div className="error">{this.state.errors.emailError}</div>
                            <br />

                            <label>BirthDate</label>
                            <input
                                type="date"
                                name="birthDate"
                                onChange={this.changeHandler}
                            />
                            <div className="error">{this.state.errors.dateError}</div>
                            <br />

                            <div>
                                <label>Password</label>
                                <input
                                    type={this.state.show ? "text" : "password"}
                                    name="password"
                                    onChange={this.changeHandler}
                                />
                                <button type="button" onClick={this.showPassword}>Show</button>
                            </div>
                            <div className="error">{this.state.errors.passwordError}</div>
                            <br />
                            <button type="submit"  >Submit</button>
                        </form>
                    </div>

                    <div className="width-50">

                        {this.state.isSubmit && (
                            <table border="1px" width="100%">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>City</th>
                                        <th>Email</th>
                                        <th>BirthDate</th>
                                    </tr>
                                </thead>
                                {
                                    this.state.lists.map((item) => {
                                        return (
                                            <>
                                                <tr>

                                                    {
                                                        item.gender == "male" ? <td>Mr.{item.name}</td> : <td>Mrs.{item.name}</td>
                                                    }
                                                    <td>{item.gender}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.birthDate}</td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </table>
                        )}
                    </div>
                </div>
            </>
        )
    }
}
