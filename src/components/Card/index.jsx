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


    return (
        <div>
            <ul>
                {Object.keys(card).map(item => <li key={goodsObj[item]['id']}>{goodsObj[item]['title']}-{card[item]}</li>)}
                <div>Price : </div>
            </ul>
        </div>
    )
}
