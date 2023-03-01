
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import { ThunkAction } from 'redux-thunk';


//? possiblement à supprimer
import { Card, getAllCards } from "../redux/actions/getAllCards"

import { StubLib } from '../data/stub';
import { Card } from '../models/Card';

//@ts-ignore
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

//@ts-ignore
export default function ListScreen({navigation}){
    const [count, setCount] = useState(0);



    //  // Initialize the binding content with the application initial state

    // //@ts-ignore
    
    // const nList = useSelector(state => state.cards);
    // // Create a const that will hold the react-redux events dispatcher
    // const dispatch = useDispatch();
    
    // // Let's define a hook that will be used to update the rendered state after the return will be called
    // // You cannot perform side-effects outside of a useEffect hook

    // useEffect(() => {
    //     const loadCards = async () => {
    //         await dispatch(getAllCards());
    //     };
    //     loadCards();
    // }, [dispatch]);

    const {getCards} = new StubLib();
    const list: Card[] = getCards();
    const req =  fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards')
    

    return (
        <View style={styles.container}>
            <Text>{}</Text>
            <FlatList data={list}         
            renderItem={({item}) => <Item title={item.name} />}
            keyExtractor={item => item.id}/>

            {/* <FlatList data={nList} renderItem={({item}) =>
                    
                    //<TouchableHighlight onPress={() => navigation.navigate("CardsDetails", {"card": item})}> //* mettre la page de detail ici, renvoi a home pour l'instant
                    <TouchableHighlight onPress={() => navigation.navigate("HomeScreen")}>
                        <Item title={item.name}/>
                    </TouchableHighlight>
                } keyExtractor={(item: Card) => item.name}/> */}
        </View>

        
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor : "#ff00ff",
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
    }
});
