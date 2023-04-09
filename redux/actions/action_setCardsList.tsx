import { Card } from '../../models/Card';
import {FETCH_DATA} from '../constants';
export const setCardsList = (List: Card[]) => {
    return {
        type: FETCH_DATA,
        payload: List,
    };
}