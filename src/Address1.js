                           
// import React, { Component } from 'react'
import React, { Component } from 'react'


const Country = [
    {
        name: "america",
        id: 1
    },
    {
        name: "india",
        id: 2
    },
    {
        name: "africa",
        id: 3
    }
]

const State = [
    {
        name: "alaska",
        id: 1,
        countryid: 1
    },
    {
        name: "texas",
        id: 2,
        countryid: 1
    },
    {
        name: "gujrat",
        id: 3,
        countryid: 2
    },
    {
        name: "kerla",
        id: 4,
        countryid: 2
    },
    {
        name: "Algeria",
        id: 5,
        countryid: 3
    },
    {
        name: "Angola",
        id: 6,
        countryid: 3
    },
]

const City = [
    {
        name: "sikta",
        id: 1,
        stateid: 1
    },
    {
        name: "homer",
        id: 2,
        stateid: 1

    },
    {
        name: "houston",
        id: 3,
        stateid: 2

    },
    {
        name: "dallas",
        id: 4,
        stateid: 2

    },
    {
        name: "surat",
        id: 5,
        stateid: 3
    },
    {
        name: "ahmedabad",
        id: 6,
        stateid: 3

    },
    {
        name: "kochi",
        id: 7,
        stateid: 4

    },
    {
        name: "kolam",
        id: 8,
        stateid: 4

    },
    {
        name: "orana",
        id: 9,
        stateid: 5
    },
    {
        name: "batna",
        id: 10,
        stateid: 5

    },
    {
        name: "Luanda",
        id: 11,
        stateid: 6

    },
    {
        name: "lobito",
        id: 12,
        stateid: 6

    },
]
export default class admin extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            
            AddArr : ["Enter Address","Enter Address"],
            currentCountry: '',
            printState: [],
            currentState: '',
            printCity: []
        }
    }
    CountryHandler = (e) => {
        this.setState({
            currentCountry: parseInt(e.target.value),
            printState:State.filter((item)=>{
                return item.countryid === parseInt(e.target.value)
            }),
            printCity:[]

        })
    }
    StateHandler = (e) => {
        this.setState({
            currentState: e.target.value,
            printCity:City.filter((item)=>{
                return item.stateid === parseInt(e.target.value)
            })
         })
    }
    submit = () => {
        this.setState({AddArr:[...this.state.AddArr,"Enter Address"]})
    }
    remove = (id) => {
        this.state.AddArr.filter((item,i)=>{
            console.log(i);
            console.log(id);
         return  i !== id ? item :null 
        })
    }
    componentDidUpdate() {
        console.log("a");
    }
    
    render() {
        return (
            <>  
            <div>
                {
                    this.state.AddArr.map((item,i)=>{
                        return (
                            <>
                               Address{i+1}:<input type="text" id={i} placeholder={item}></input>
                               <button onClick={()=>{this.remove(i)}}>Remove</button><br/><br/>
                            </>
                        )
                        
                    })
                }
            </div>
                <div>
                    <select onChange={this.CountryHandler} >Select Country
                    <option >Select country</option>
                        {
                            Country.map((item) => {
                                return (
                                    <>
                                        <option  value={item.id}>{item.name}</option>
                                    </>
                                )
                            })
                        }
                    </select><br/><br/>

                    <select onChange={this.StateHandler}>Select State
                        
                    <option  >Select State</option>
                        {
                            this.state.printState.map((item) => {
                                return (
                                    <>
                                        <option value={item.id}>{item.name}</option>
                                    </>
                                )
                            })
                        }
                    </select><br/><br/>

                    <select >Select City
                    <option>Select City</option>
                    {
                            this.state.printCity.map((item) => {
                                return (
                                    <>
                                        <option value={item.id}>{item.name}</option>
                                    </>
                                )
                            })
                    }
                    </select><br/><br/><br/>
                    <button onClick={()=>{this.submit()}}>Add</button>
                </div>
            </>
        )
    }
}


