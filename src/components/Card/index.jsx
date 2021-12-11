import React from 'react'

export default function Card() {
    const { card: { value } } = useSelector(({ card }) => ({ card }))
    const { goods: { goods } } = useSelector(({ goods }) => ({ goods }))
    return (
        <div>
            <ul>

            </ul>
        </div>
    )
}
