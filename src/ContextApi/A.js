import React, { Component } from 'react'
import B from './B'
import { Provider } from './Context'
export default class A extends Component {

    state = {
        name: "dixit"
    }
    changeName = () => {
        this.setState({
            name:"mohil"
        })
    }
    render() {
        const contextValue = {
            data:this.state,
            handleClick:this.changeName
        }
        return (
            <div>
                <Provider value={contextValue}>
                    <B />
                </Provider>
            </div>
        )
    }
}

