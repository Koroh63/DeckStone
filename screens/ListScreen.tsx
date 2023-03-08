
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import { ThunkAction } from 'redux-thunk';


//? possiblement à supprimer
import { getAllCards } from "../redux/actions/actionSelection"

import { Card } from '../models/Card';
import { Image } from 'react-native';
import { ImageURISource } from 'react-native';

import { switchMode } from '../redux/actions/action_switchMode';

//@ts-ignore
const Item = ({url}) => (
    // <View style={styles.item}>
    //     <Text style={styles.title}>{title}</Text>
    // </View>
    <View>
        <Image 
        source={{uri:url}}
        style={{flex:1, minHeight:250, minWidth:180}}/>

    </View>
);

//@ts-ignore
export default function ListScreen({navigation}){
    const [count, setCount] = useState(0);

    // get the current theme
    //@ts-ignore
    const theme = useSelector(state => state.theme);

    //  // Initialize the binding content with the application initial state

    //@ts-ignore
    const nList = useSelector(state => state.appReducer.cards);
    // Create a const that will hold the react-redux events dispatcher
    const dispatch = useDispatch();
    
    // Let's define a hook that will be used to update the rendered state after the return will be called
    // You cannot perform side-effects outside of a useEffect hook

    useEffect(() => {
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


    //* Themes *//
    
    // define a component mode state

    const [mode, setMode] = useState(theme.mode);

    // Handle changing the theme mode
    const handleThemeChange = () => { 
        dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'));
    }

    // Update the app Incase the theme mode changes
    useEffect(() => { 
        setMode(theme.mode);
    }, [theme]);



    return (
        <View style={styles.container}>
        {/* <FlatList data={nList}         
        renderItem={({item}) => <Item title={item.name} />}
        keyExtractor={item => item.id}/> */}

        <FlatList 
            numColumns={2}
            data={nList} 
            renderItem={({item}) =>
                
                //<TouchableHighlight onPress={() => navigation.navigate("CardsDetails", {"card": item})}> //* mettre la page de detail ici, renvoi a home pour l'instant
                <TouchableHighlight onPress={() => navigation.navigate("ListFav")}>
                    <Item url={item.img}/>
                </TouchableHighlight>
                
                // //<Text>{item.name}</Text>
                // // <View>
                // //     <Image 
                // //     source={{uri:item.img}}
                // //     style={{flex:1, minHeight:250, minWidth:180}}/>

                // // </View>
            } keyExtractor={(item: Card) => item.id.toString()}/>
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
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    container_dark: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    }

    ,
    text_light: {
        marginBottom: 20,
        color: '#000'
    }

    ,
    text_dark: {
        marginBottom: 20,
        color: "#fff"
    }
});
