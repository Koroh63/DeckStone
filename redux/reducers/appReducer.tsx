import {FETCH_DATA, ADD_FAVORITE_DATA} from '../constants'

const initialState = {
    cards: ["C_ace", "C_K", "C_Q", "C_J"],
    favoriteCards: [ "C_ace", "C_K"],
}


// @ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_DATA:
        // @ts-ignore
            return {...state, favoriteCards: state.favoriteCards.push(action.payload)};
        case FETCH_DATA:
        // @ts-ignore
            return {...state, cards: action.payload};
        default:
            return state;
    }
}

