import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function Card() {
    const { card: { values: card } } = useSelector(({ card }) => ({ card }))

    const cartObj = { ...card }
    delete cartObj["count"];


    let total = 0

    Object.values(cartObj).map(({ title, cost, counter }) => total += (cost * counter))




    return (
        <div>
            <ul>
                {Object.values(cartObj).map(({ title, cost, counter, id }) => <li key={id}>
                    title : {title}
                    price : {cost * counter}
                    amount : {counter}
                </li>)}
            </ul>
            total : {total}
        </div>
    )
}
