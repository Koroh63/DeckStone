import { Card } from '../../models/Card';
import { CardProps } from '../../props/favProps';
import {ADD_FAVORITE_DATA} from '../constants';

export const setFavList = (props : CardProps) => {
    return {
        type: ADD_FAVORITE_DATA,
        payload: props,
    };
}