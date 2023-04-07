
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { ThunkAction } from 'redux-thunk';


//? possiblement à supprimer
import { getAllCards } from "../redux/actions/actionSelection"
import { Card } from '../models/Card';
import { Image } from 'react-native';
import { ImageURISource } from 'react-native';
import Item from '../components/ListItemComponent';

//* Icons
//  import { BiSearchAlt } from 'react-icons';

//* Components




//@ts-ignore
export default function ListScreen({navigation}){

    //@ts-ignore
    let nList = useSelector(state => state.appReducer.favoriteCards);
    console.log(nList)

    const [searchValue, setSearchValue] = useState('');

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
                data={nList}
                renderItem={({item}) =>
                    <TouchableHighlight onPress={() => navigation.navigate("ListFav")}>
                        <Item route={{
                            card: item,
                            bool: true
                        }} />
                        <Text>"a"</Text>
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
