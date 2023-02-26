
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { FlatList } from 'react-native-gesture-handler';
import { StubLib } from '../data/stub';
import { Card } from '../models/Card';

//@ts-ignore
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Main() {
    const [count, setCount] = useState(0);
    const {getCards} = new StubLib();
    const list: Card[] = getCards();
    const req =  fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards')
    

    return (
        <View style={styles.container}>
            <Text>{}</Text>
            <FlatList data={list}         
            renderItem={({item}) => <Item title={item.name} />}
            keyExtractor={item => item.id}/>

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
