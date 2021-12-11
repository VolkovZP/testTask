import { findByRole } from '@testing-library/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export default function Card() {
    const { card: { value: card } } = useSelector(({ card }) => ({ card }))
    const { goods: { goods } } = useSelector(({ goods }) => ({ goods }))

    const goodsObj = goods.reduce((acc, item) => {
        acc[item['id']] = item
        return acc
    }, {})

    let total = 0;

    Object.keys(card).map(item => total += goodsObj[item]['cost'] * card[item])

    return (
        <div>
            <ul>
                {Object.keys(card).map(item => <li key={goodsObj[item]['id']}>{goodsObj[item]['title']}-{card[item]} : price {goodsObj[item]['cost'] * card[item]}</li>)}
            </ul>
            total price : {total}
        </div>
    )
}
