import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toCurrency } from '../../func'
import { bindActionCreators } from 'redux'
import * as cardCreaters from '../../actions/cardCreaters'
import style from './Card.module.sass';


export default function Card() {

    const { card: { values: card } } = useSelector(({ card }) => ({ card }))
    console.log(card)
    const dispatch = useDispatch();
    const { removeToCart, decrementFromCart } = bindActionCreators(cardCreaters, dispatch)

    let totalPrice = 0;




    function priceWithDiscount(counter, cost, discount, discontForEveryKg) {
        let oddCounter = 0
        let result = 0
        if (discount) {
            for (let i = 1; i <= counter; i++) {
                if (i % discontForEveryKg === 0) {
                    oddCounter++
                    result = discount * oddCounter
                } else {
                    result += cost
                }
            }
        } else {
            result += counter * cost
        }
        totalPrice += result
        return result
    }

    return (
        <div className={style.qwe}>
            <ul>
                {Object.values(card).map(({ title, cost, counter, id, discount, discontForEveryKg }) => <li key={id}>
                    title : {title}
                    price : {toCurrency(priceWithDiscount(counter, cost, discount, discontForEveryKg))}
                    amount : {counter}
                    <button onClick={() => removeToCart(id)}>x</button>
                    <button onClick={() => decrementFromCart(id)}>-1</button>

                </li>)}
            </ul>
            total: {toCurrency(totalPrice)}
        </div >
    )
}


