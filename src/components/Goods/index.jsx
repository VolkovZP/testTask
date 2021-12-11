import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoodsList from './GoodsList'

function Goods() {
    const { goods: { goods } } = useSelector(({ goods }) => ({ goods }))
    return (
        <div>
            {goods.map(({ title, image, cost, id }) => <GoodsList key={id} title={title} img={image} cost={cost} />)}
        </div>
    )
}

export default Goods;
