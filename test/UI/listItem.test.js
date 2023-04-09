import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../setup/testReducer";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Item from "../../components/ListItemComponent";

jest.useFakeTimers();

const store = configureStore({
    reducer: {
        appReducer: testReducer,
    },
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: false
        })
});

const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>);

describe('<Item/>', ()=> {
    test('Assert displayed values', () =>{
        const expectedCardInfos = store.getState().appReducer.cards[0];

        render(<Wrapper>
            <Item route={{
                card: expectedCardInfos,
                bool: false
            }} ></Item>
        </Wrapper>)

        expect(screen.getByTestId('card-url')).toHaveProperty("source", {uri: expectedCardInfos.img})
        
        
    })
})