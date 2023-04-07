import { Card } from '../../models/Card';
import { CardProps } from '../../props/favprops';
import {ADD_FAVORITE_DATA, FETCH_DATA} from '../constants';

export const setFavList = (props : CardProps) => {
    return {
        type: ADD_FAVORITE_DATA,
        payload: props,
    };
}