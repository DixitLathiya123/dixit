import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import Ac from '../image/ac.jpg'
import Tv from '../image/tv.webp'
import Gas from '../image/gas.jpg'
import Fridge from '../image/fridge.webp'

export default function Customer() {
    let abc = null
    const [Cust, setCust] = useState({
        data: JSON.parse(localStorage.getItem('data'))
    })
    return (
        <div>
            {

                Cust.data.map((item) => 
                    item.map((data) =>
                    <>
                        { data.name == "TV" && <img src={Tv} alt="Tv" />}
                        { data.name == "AC" && <img src={Ac} alt="ac" />}
                        { data.name == "Gas" && <img src={Gas} alt="Gas" />}
                        { data.name == "Fridge" && <img src={Fridge} alt="Fridge" />}
                        <p>name:{data.name}</p>
                        { data.price &&
                            <p>price:{data.price[data.price.length - 1].amount}</p>
                        }
                         </>
                    )
                )
            }
        </div>
    )
}
