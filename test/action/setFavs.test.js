import { Card } from "../../models/Card";
import { setFavList } from "../../redux/actions/action_setFavList";
import { setList } from "../../redux/actions/action_setFavs";


describe('setFavs',() => {
    it('should take the list', () => {
        const payload = [new Card("1","test1","",""),new Card("2","test2","","",true)];
        const expectation = {
            type: "SET_FAVS",
            payload: payload,
        };

        expect(setList(payload)).toEqual(expectation);
    })
})