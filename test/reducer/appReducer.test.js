import appReducer from "../../redux/reducers/appReducer";

describe('Test Reducer', () => {
    let initialState = {
        cards: [],
        favoriteCards: []
    }

    it('should return initial state', () => {
        expect(appReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_DATA', () => {
        const payload = [new Card("1","test1","",""),new Card("2","test2","","",true)];
        expect(
            appReducer(initialState, {
                type: "FETCH_DATA",
                payload,
            })
        ).toEqual({
            cards: payload,
            favoriteCards: [],
        });
    });
});