import { Card } from '../../models/Card';
import {SET_FAVS} from '../constants';

export const setList = (list: []) => {
    return {
        type: SET_FAVS,
        payload: list
    };
}
