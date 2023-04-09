import { Card } from "../../models/Card";
import { setCardsList } from "../../redux/actions/action_setCardsList";

describe('setCardLIst',() => {
    it('should take the list', () => {
        const payload = [new Card("1","test1","",""),new Card("2","test2","","",true)];
        const expectation = {
            type: "FETCH_DATA",
            payload: payload,
        };

        expect(setCardsList(payload)).toEqual(expectation);
    })
})