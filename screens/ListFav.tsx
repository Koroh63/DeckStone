
import { StyleSheet, View, TouchableHighlight, TextInput } from 'react-native';
import React, { useState} from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

import { Card } from '../models/Card';
import Item from '../components/ListeFavComponent';




//@ts-ignore
export default function ListScreen({navigation}){

    //@ts-ignore
    var nList : Card[] = useSelector(state => state.appReducer.favoriteCards);

    const [searchValue, setSearchValue] = useState('');

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
                    <TouchableHighlight onPress={() => navigation.navigate("ListFav")}>
                        <Item route={{
                            card: item,
                            bool: true
                        }} />
                    </TouchableHighlight>
                }
                keyExtractor={(item: Card) => item.id}
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
