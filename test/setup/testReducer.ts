import { Card } from "../../models/Card";
import appReducer from "../../redux/reducers/appReducer"

const initialState = {
    cards: [new Card("1","test1","url1","urlGold2")],
    favoriteCards: [new Card("1","test1","url1","urlGold2")]
}

//@ts-ignore
export default testReducer = (state = initialState, action) => {
    //@ts-ignore
    return appReducer(initialState,action);
}