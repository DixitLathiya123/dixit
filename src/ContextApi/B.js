import React, { Component } from 'react'
import C from './C'
import { Consumer } from './Context'

export default class B extends Component {
    render() {

        return (
            <div>
                    <C />
                <Consumer>
                {({handleClick})=>(
                    <>

                    <button onClick={handleClick}>Change</button>
                    </>
                )}
                </Consumer>
            </div>
        )
    }
}

