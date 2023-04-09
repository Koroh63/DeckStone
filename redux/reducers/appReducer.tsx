import { CardProps } from '../../props/favprops'
import {FETCH_DATA, ADD_FAVORITE_DATA, SET_FAVS} from '../constants'
import StorageHeart from '../../service/AsyncStorage'

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
                if(state.favoriteCards == undefined){
                    const tab = [a.route.card]
                    StorageHeart.setItem("favoriteList",tab)
                    return {...state, favoriteCards : tab};
                }
                if( Array.from(state.favoriteCards).every((elem) => elem != a.route.card)){

                    //@ts-ignore
                    const tab = state.favoriteCards.concat([a.route.card])
                    console.log(state.favoriteCards)
                    StorageHeart.setItem("favoriteList",tab)
                    return {...state, favoriteCards : tab};
                }
                return {...state}
            }
            else{
                const tab = state.favoriteCards.filter((item) => item!= a.route.card)
                StorageHeart.setItem("favoriteList",tab)
                return {...state, favoriteCards : tab };
            }
        case FETCH_DATA:
            return {...state, cards: action.payload};
        case SET_FAVS:
            //@ts-ignore
            console.log("Set_favs : ",action.payload)
            return {...state, favoriteCards: action.payload}
        default:
            return state;
    }
}

