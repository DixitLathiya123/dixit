// import React, { Component } from 'react'
// import SecondValidForm from './SecondValidForm'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <SecondValidForm />
//       </div>
//     )
//   }
// }

import React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Login from './UserAdmin/login'
import Customer from './UserAdmin/customer'
import Admin from './UserAdmin/admin'
import FieldAdd from './task/FieldAdd'
import SelectBox from './task/selectBox'
import Calculator from './task/Calculator'
import Data from './Api/data'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Route exact path="/" component={Calculator} /> */}
        {/* <Route exact path="/" component={SelectBox} /> */}
        {/* <Route exact path="/" component={FieldAdd} /> */}
        <Route exact path="/" component={Data} />
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Route exact path="/admin" component={Admin} /> */}
        {/* <Route exact path="/customer" component={Customer} /> */}
      </BrowserRouter>
    )
  }
}
