import {ADD_FAVORITE_DATA, FETCH_DATA} from '../constants';

//? Changer cette importe quand la classe sera definit dans un fichier correctement.
import {Card} from '../../models/Card'

export const setCardsList = (List: Card[]) => {
    return {
        type: "FETCH_DATA",
        payload: List,
    };
}