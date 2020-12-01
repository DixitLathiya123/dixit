import Axios from 'axios'
import React, { Component } from 'react'
import './Add.css'
import classNames from 'classnames';
let a=[]
export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: [],
            print: [],
            isLine: false
        }
    }



    changeValue = (e) => {
        this.setState({ task: e.target.value })
    }



    submit = (e) => {
        e.preventDefault()
        console.log(this.state);
        Axios.post('http://localhost:4000/todo/addTask', this.state, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((Response) => {
                console.log(Response);
            })
            .catch((error) => {
                console.log("error", error);
            })

        Axios.get('http://localhost:4000/todo/getAllTask')
            .then((Response) => {
                this.setState({ print: Response.data })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }



    componentDidMount() {
        Axios.get('http://localhost:4000/todo/getAllTask')
            .then((Response) => {
                this.setState({ print: Response.data })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }



    delete = (id) => {
        console.log(id);
        Axios.delete(`http://localhost:4000/todo/deleteTask/${id}`)
            .then((Response) => {
                console.log(Response.data);
            })
            .catch((error) => {
                console.log(error)
            })

        Axios.get('http://localhost:4000/todo/getAllTask')
            .then((Response) => {
                this.setState({ print: Response.data })
            })
            .catch((error) => {
                console.log("error", error);
            })
    }



    line = (item) => {
        const index = this.state.print.findIndex((item1) => {
            return item1._id === item._id
        })
        if (index >= 0) {
            const dummyState = this.state.print;
            dummyState[index].complete = !dummyState[index].complete
            this.setState({ print: dummyState })
        }
        
    }


    display = () =>{
        a=this.state.print.filter((item)=>{
            if(item.complete === true){
                return item
            }
        })
        console.log(a);
    }
    render() {
        const { text, print } = this.state
        return (
            <>
                <div>
                    <form >
                        <input type="text" placeholder="Enter Value" value={text} onChange={this.changeValue} />
                        <input type="submit" onClick={this.submit} />
                    </form>
                    {(print &&
                        print.map((item) => {
                            return (<div className='main'>
                                <p className={classNames('cursor-pointer', {
                                    'line': item.complete,
                                })} onClick={() => { this.line(item) }}
                                    id={item._id}><b>Name:</b>{item.task}&nbsp;&nbsp;
                                </p>
                                <b> Status:</b>
                                {JSON.stringify(item.complete)}
                                <button onClick={() => { this.delete(item._id) }}>Delete</button>
                            </div>)
                        })
                    )}
                    <div className='main'>
                        <h3>{print.length}items</h3>
                        <button onClick={()=>{this.display()}}>Complete</button>
                    </div>
                   
                </div>
            </>
        )
    }
}