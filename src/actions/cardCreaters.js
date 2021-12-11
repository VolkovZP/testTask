import { ACTIONS_TYPES } from "./actionTypes";

export const addToCard = (payload) => ({
    type: ACTIONS_TYPES.ADD_TO_CARD,
    payload
})