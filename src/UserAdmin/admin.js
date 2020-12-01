import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import Customer from './customer';
import Login from './login';


function Admin() {
    let history = useHistory()
    const [Prod, setProd] = useState({
        data: JSON.parse(localStorage.getItem('data')).map((item) => item.map((item) => item)),
        product: [
            {
                id: Math.random().toString().substr(9, 4),
                name: 'TV',
                price: [],
            },
            {
                id: Math.random().toString().substr(9, 4),
                name: 'AC',
                price: [],
            },
            {
                id: Math.random().toString().substr(9, 4),
                name: 'Gas',
                price: [],
            },
            {
                id: Math.random().toString().substr(9, 4),
                name: 'Fridge',
                price: [],
            },
        ],
        currentId: '',
        currentPrice: '',
    })

    const status = localStorage.getItem("token")
    let loggedIn = true
    if (status !== 'admin') {
        loggedIn = false
    }
    if (loggedIn === false) {
        return <Redirect to="/" />
    }

    const selectHandler = (e) => {
        setProd({
            ...Prod,
            currentId: e.target.value
        })
    }

    const inputHandler = (e) => {

        setProd({
            ...Prod,
            currentPrice: e.target.value
        })
    }

    const submit = (e) => {
        const Index = Prod.product.findIndex((item) => {
            return item.id === Prod.currentId;
        });

        if (Index > -1) {
            const dummy = Prod.data[0];
            dummy[Index].price = [
                ...dummy[Index].price,
                {
                    id: Math.random().toString().substr(9, 4),
                    date: Date(),
                    amount: Prod.currentPrice
                }
            ];
            setProd({
                ...Prod,
                product: [...dummy]
            });
            localStorage.setItem("data", JSON.stringify(Prod.data))
        } else {
            return;
        }
    };

    const Customer = () => {
        history.push("/customer")
    }
    return (
        <div>
            Select Product <select onChange={(e) => { selectHandler(e) }}>
                <option>--- select Product ---</option>
                {
                    Prod && Prod.product && Prod.product.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    })
                }
            </select><br />
            price<input type="text" name="price" onChange={(e) => inputHandler(e)} />
            <button onClick={() => submit()}>Save</button>
            <button onClick={() => Customer()}>Customer</button>
            <table border="1px solid black">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Prod.data.map((item) =>
                            item.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.price.map((item)=>{
                                               return<tr><td>{item.amount}</td></tr>
                                            })}</td>
                                            <td>{item.price.map((item)=>{
                                               return<tr><td>{item.date}</td></tr>
                                            })}</td>
                                        </tr>
                                    </>
                                )
                            })
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Admin
