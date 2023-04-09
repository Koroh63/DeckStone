import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../setup/testReducer";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Item from "../../components/ListItemComponent";
import { fireEvent } from "@testing-library/react-native";
import AsyncStorageMock from "../../__mocks__/@react-native-community/async-storage";


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
    test('Assert displayed values for fav list', () =>{
        const expectedCardInfos = store.getState().appReducer.favoriteCards[0];

        render(<Wrapper>
            <Item route={{
                card: expectedCardInfos,
                bool: true,
            }} ></Item>
        </Wrapper>)

        expect(screen.getByTestId('card-url')).toHaveProperty("source", {uri: expectedCardInfos.img})
            
        let size = store.getState().appReducer.favoriteCards.length;

        fireEvent.press(screen.getByTestId("button"))

        expect(store.getState().appReducer.favoriteCards.length).toBe(size - 1)
        
    })
});