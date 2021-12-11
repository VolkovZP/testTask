import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cardCreaters from '../../../actions/cardCreaters'

function GoodsList({ img, title, cost, id }) {
    const { card: { value } } = useSelector(({ card }) => ({ card }))

    const dispatch = useDispatch();
    const { addToCard } = bindActionCreators(cardCreaters, dispatch)


    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target
        if (!t.classList.contains('add-to-card')) return true;
        addToCard(t.getAttribute('data-key'))

    }

    return (
        <div onClick={clickHandler}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{cost}</p>
            <button data-key={id} className='add-to-card'>add to card</button>
        </div>
    )
}
export default GoodsList;