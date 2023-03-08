import {THEME_CHANGE, FETCH_DATA, ADD_FAVORITE_DATA} from '../constants'

const initialState = {
    mode: 'light',
    cards: [],
    favoriteCards: [],
    // cards: ["C_ace", "C_K", "C_Q", "C_J"],
    // favoriteCards: [ "C_ace", "C_K"],
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

        case THEME_CHANGE:
            return {...state,mode: action.payload};

        default:
            return state;
    }
}

