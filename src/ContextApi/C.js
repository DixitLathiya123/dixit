import React, { Component } from 'react'
import {Consumer} from './Context'
export default class C extends Component {
    render() {
        return (
            <div>
                <Consumer>
                {({data})=>(
                    <>
                    <h4>
                        Name:{data.name}
                    </h4>
                    </>
                )}
                </Consumer>
            </div>
        )
    }
}
