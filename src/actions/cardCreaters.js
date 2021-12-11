import { ACTIONS_TYPES } from "./actionTypes";

export const showCard = payload => ({
    type: ACTIONS_TYPES.SHOW_CARD,
    payload
})

export const addToCard = payload => ({
    type: ACTIONS_TYPES.ADD_TO_CARD,
    payload,
})