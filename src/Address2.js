import React, { Component } from 'react'
import './Add.css'

export default class Address2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            forms: [],
            isSubmit:false
        }
    }
    addForm = () => {
        if (this.state.forms.length < 5) {
            this.setState({
                ...this.state,
                forms: [...this.state.forms, {
                    id: Math.random().toString(36).substr(2, 9),
                    address: '',
                    country: '',
                    state: '',
                    city: ''
                }]
            })
        }
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            forms: [...this.state.forms, {
                id: Math.random().toString(36).substr(2, 9),
                address: '',
                country: '',
                state: '',
                city: '',
                
            }]
        })
    }

    deleteAddress = (id) => {
            const filterItem = this.state.forms.filter((item) => {
                if (item.id !== id) {
                    return item
                }
            })
            this.setState({
                forms: filterItem
            })
    }


    setValue = (event, id) => {
        const index = this.state.forms.findIndex((item) => {
            return item.id === id
        })
        if (index >= 0) {
            const dummyForms = this.state.forms 
            dummyForms[index][event.target.name] = event.target.value

            this.setState(
                {
                    ...this.state,
                    forms: dummyForms
                }
            )
        }

    }
    render() {
        return (
            <>
                <div className="width-100 d-flex">
                    <div className="width-50">

                        {

                            this.state.forms.map((item, index) => (
                                <>
                                    <form >
                                        <h5>Address {index + 1}</h5>
                                        <div>
                                            <textarea type="text"  name="address" value={item.address} onChange={(event) => { this.setValue(event, item.id) }} /><br />
                                            <select name="country" onChange={(event) => { this.setValue(event, item.id) }} value={item.country}>
                                                <option>--- Select Country ---</option>
                                                <option value="india">india</option>
                                                <option value="Usa">USA</option>
                                                <option value="canada">canada</option>
                                                <option value="japan">japan</option>
                                                <option value="israel">israel</option>
                                            </select><br />
                                            <select name="state" onChange={(event) => { this.setValue(event, item.id) }} value={item.state}>
                                                <option>--- Select State ---</option>
                                                <option value="gujarat">gujarat</option>
                                                <option value="texas">texas</option>
                                                <option value="ottawa">ottawa</option>
                                                <option value="Shikoku">Shikoku</option>
                                                <option value="Southern ">Southern </option>
                                            </select><br />
                                            <select name="city" onChange={(event) => { this.setValue(event, item.id) }} value={item.city}>
                                                <option>--- Select City ---</option>
                                                <option value="surat">surat</option>
                                                <option value="dallas">dallas</option>
                                                <option value="hull">hull</option>
                                                <option value="tokyo">tokyo</option>
                                                <option value="Eilat">Eilat</option>
                                            </select><br />
                                        </div>
                                    </form>
                                    {
                                        this.state.forms.length > 1 &&
                                        <button onClick={() => { this.deleteAddress(item.id) }}>Delete</button>
                                    }

                                    <hr />
                                </>
                            ))
                        }
                        <button onClick={this.addForm}>Add Another Address</button>
                        <button onClick={()=>{this.setState({...this.state,isSubmit:true })}}>save</button>
                    </div>
                    <div className="width-50">
                        {this.state.isSubmit && (
                        <table border="1px" width="100%">
                            <tr>
                                <th>Address</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>City</th>
                            </tr>
                            {
                                this.state.forms.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.address}</td>
                                                <td>{item.country}</td>
                                                <td>{item.state}</td>
                                                <td>{item.city}</td>
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
