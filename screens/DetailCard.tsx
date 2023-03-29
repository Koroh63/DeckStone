import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Card } from '../models/Card';

//* Components
import {ListItemComponent} from '../components/ListItemComponent'

//@ts-ignore
export default function DetailMain({ route }){
    
    const { card, other } = route.params;

    let pressed : Boolean = false
    const [titleText, setTitleText] = useState(card.name)
    const onPressTitle = () => {
        pressed ? setTitleText(titleText + '\n' + 'Id : ' + card.id) : setTitleText(card.name) 
        pressed ? pressed = false :pressed = true
    };
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title} onPress={onPressTitle} >{titleText}</Text>
            </View>
            <View style={styles.item}>
                <ListItemComponent url={card.img}/>
            </View>            
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        borderRadius : 15,
        backgroundColor: '#efefef',
        padding: 15,
        maxHeight:300,
        maxWidth:350,
    },
    title: {
        fontStyle: "italic",
        fontSize: 20,
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius : 10,
        borderWidth: 10,
        borderColor: '#efefef',
        maxHeight: 100,
    }
});
