import { Card } from '../../models/Card'
import { CardProps } from '../../props/favprops'
import {FETCH_DATA, ADD_FAVORITE_DATA} from '../constants'

const initialState = {
    cards: [],
    favoriteCards: []
}


// @ts-ignore
export default appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_DATA:
            const a : CardProps  = action.payload
            if(a.route.bool ==false){
                const t : Card[] = state.favoriteCards
                
                if(t.every((elem) => elem != a.route.card)){

                    //@ts-ignore
                    const tab = state.favoriteCards.concat([a.route.card])
                    console.log(state.favoriteCards)
                    return {...state, favoriteCards : tab};
                }
                return {...state}
            }
            else{
                const tab = state.favoriteCards.filter((item) => item!= a.route.card)
                return {...state, favoriteCards : tab };
            }
        case FETCH_DATA:
        // @ts-ignore
            return {...state, cards: action.payload};
        default:
            return state;
    }
}

