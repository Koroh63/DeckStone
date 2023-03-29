
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import { ThunkAction } from 'redux-thunk';


//? possiblement à supprimer
import { getAllCards } from "../redux/actions/actionSelection"

import { StubLib } from '../data/stub';
import { Card } from '../models/Card';
import { Image } from 'react-native';
import { ImageURISource } from 'react-native';

//* Icons
//  import { BiSearchAlt } from 'react-icons';

//* Components
import {ListItemComponent} from '../components/ListItemComponent'


//@ts-ignore
export default function ListScreen({navigation}){
    const [count, setCount] = useState(0);



    //  // Initialize the binding content with the application initial state

    //@ts-ignore
    const nList = useSelector(state => state.appReducer.cards);
    // Create a const that will hold the react-redux events dispatcher
    const dispatch = useDispatch();
    
    // Let's define a hook that will be used to update the rendered state after the return will be called
    // You cannot perform side-effects outside of a useEffect hook

    useEffect(() => {
        console.log("USEEFFECT")
        const loadCards = async () => {
            //@ts-ignore
            await dispatch(getAllCards());
        };
        loadCards();
    }, [dispatch]);



    //* Stub
    // const {getCards} = new StubLib();
    // const list: Card[] = getCards();
    // const req =  fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards')

    //https://us.api.blizzard.com/hearthstone/cards/678?locale=en_US

    //* Search : 
    const [searchValue, setSearchValue] = useState('');

    //@ts-ignore
    const filteredList = nList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder="Rechercher une carte..."
            />

            <FlatList 
                numColumns={2}
                data={filteredList} 
                renderItem={({item}) =>
                    // <TouchableHighlight onPress={() =>  ("DetailCard", {card :item})}>
                    //     <ListItemComponent url={item.img}/>
                    // </TouchableHighlight>
                    <TouchableHighlight onPress={() => navigation.navigate("DetailCard", {card :item, other : 'anything'})}>
                        <ListItemComponent url={item.img}/>
                    </TouchableHighlight>
                } 
                keyExtractor={(item: Card) => item.id.toString()}
            />
        </View>

        
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ac9585',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    border: {
        flex: 1,
        backgroundColor: '#ff0000',
        maxHeight : 100,
        borderWidth : 15,
        borderRadius : 15,
        borderColor : '#00ffaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        borderRadius : 15,
        backgroundColor: '#efefef',
        padding: 20,
        margin : 10,
    },
    title: {
        fontStyle: "italic",
    },
    textInput: {
        padding: 15,
        margin: 5,
        width:200,
        backgroundColor: '#ffffff',
        borderRadius : 15,
        shadowColor: 'grey',
        textAlign:'center'
    }
});
