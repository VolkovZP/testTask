import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoodsList from './GoodsList'

function Goods() {
    const { goods: { goods } } = useSelector(({ goods }) => ({ goods }))
    const style = { display: "flex" }
    return (
        <div style={style}>
            {goods.map(({ title, image, cost, id, discount }) => <GoodsList key={id} id={id} title={title} img={image} cost={cost} discount={discount} />)}
            <div>
            </div>
        </div>
    )
}

export default Goods;
