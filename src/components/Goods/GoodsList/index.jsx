import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cardCreaters from '../../../actions/cardCreaters'
import { toCurrency } from '../../../func'


function GoodsList({ img, title, cost, id, discount }) {
    const { card: { value } } = useSelector(({ card }) => ({ card }))



    const dispatch = useDispatch();
    const { addToCard } = bindActionCreators(cardCreaters, dispatch)



    const clickHandler = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('add-to-card')) {
            addToCard({ title, cost, id, discount })
        }
        return
    }

    return (
        <div onClick={clickHandler}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{toCurrency(cost)}</p>
            <button data-key={id} className='add-to-card'>add to card</button>
        </div>
    )
}
export default GoodsList;