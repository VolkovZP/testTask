import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cardCreaters from '../../../actions/cardCreaters'
import * as tastCreaters from '../../../actions/tastCreater'
import { toCurrency } from '../../../func'
import style from './GoodsList.module.sass'


function GoodsList({ img, title, cost, id, discount, discontForEveryKg }) {
    const [s, setS] = useState(false)
    const dispatch = useDispatch();
    const { testa } = bindActionCreators(tastCreaters, dispatch)
    const { addToCard } = bindActionCreators(cardCreaters, dispatch)
    const { test: { value } } = useSelector(({ test }) => ({ test }))

    const clickHandler = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('add-to-card')) {
            addToCard({ title, cost, id, discount, discontForEveryKg })
            setS((p) => !p)
            testa({ s, id })
        }
        return
    }
    return (
        <article onClick={clickHandler} className={style.wrapper}>
            <div className={style.inWrapper}>
                <img src={img} alt={title} className={style.image} />
            </div>
            <h1>{title}</h1>
            <span>{toCurrency(cost)}</span>
            {!value[id] ? <button data-key={id} className='add-to-card'>add to card</button> : <div>in Cart</div>}
        </article>
    )
}
export default GoodsList;