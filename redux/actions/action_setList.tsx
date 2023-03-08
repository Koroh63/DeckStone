import {ADD_FAVORITE_DATA, FETCH_DATA} from '../constants';

export const setList = (List: String[]) => {
    return {
        type: FETCH_DATA,
        payload: List,
    };
}

// export const setFavList = (List: String[]) => {
//     return {
//         type: ADD_FAVORITE_DATA,
//         payload: List,
//     };
// }