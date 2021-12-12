import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toCurrency } from '../../func'
import { bindActionCreators } from 'redux'
import * as cardCreaters from '../../actions/cardCreaters'

export default function Card() {
    const { card: { values: card } } = useSelector(({ card }) => ({ card }))
    const dispatch = useDispatch();
    const { removeToCart, decrementFromCart } = bindActionCreators(cardCreaters, dispatch)

    let total = 0;


    Object.values(card).map(({ cost, counter }) => total += (cost * counter))




    return (
        <div>
            <ul>
                {Object.values(card).map(({ title, cost, counter, id }) => <li key={id}>
                    title : {title}
                    price : {toCurrency(cost * counter)}
                    amount : {counter}
                    <button onClick={() => removeToCart(id)}>x</button>
                    <button onClick={() => decrementFromCart(id)}>-1</button>
                </li>)}
            </ul>
            total: {toCurrency(total)}
        </div >
    )
}
