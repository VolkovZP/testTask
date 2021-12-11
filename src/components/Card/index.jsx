import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function Card() {
    const { card: { values: card } } = useSelector(({ card }) => ({ card }))

    const cartObj = { ...card }
    delete cartObj["count"];




    Object.values(cartObj).map(({ title, cost, counter }) => <li>
        title : {title}
    </li>)




    return (
        <div>
            <ul>
                {Object.values(cartObj).map(({ title, cost, counter, id }) => <li key={id}>
                    title : {title}
                    price : {cost * counter}
                    amount : {counter}
                </li>)}
            </ul>
        </div>
    )
}
