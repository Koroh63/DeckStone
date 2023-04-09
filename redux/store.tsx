import {configureStore} from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer';

const reducer = {
    appReducer: appReducer,
}

// @ts-ignore
const store = configureStore({
    // @ts-ignore
    reducer,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false}), //desactive le check de la serialization (primitif)
},);

export default store;