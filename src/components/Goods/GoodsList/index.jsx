import React from 'react'

function GoodsList({ img, title, cost }) {
    return (
        <div>
            <img src={img} alt={title} />
            <p>{title}</p>
            <p>{cost}</p>
            <button>add to card</button>
        </div>
    )
}
export default GoodsList;