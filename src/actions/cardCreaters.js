import { ACTIONS_TYPES } from "./actionTypes";

export const addToCard = (payload) => ({
    type: ACTIONS_TYPES.ADD_TO_CARD,
    payload
})


export const removeToCart = (id) => ({
    type: ACTIONS_TYPES.REMOVE_FROM_CART,
    id
})

export const decrementFromCart = (id) => ({
    type: ACTIONS_TYPES.DECREMENT_FROM_AMOUNT,
    id
})
