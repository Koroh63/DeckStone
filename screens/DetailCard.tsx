import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Card } from '../models/Card';

import { Table, Row, Rows } from 'react-native-table-component';

//* Components
import {ListItemComponent} from '../components/ListItemComponent'
import { ScrollView } from 'react-native-gesture-handler';

//@ts-ignore
export default function DetailMain({ route }){

    const { card, other } = route.params;

    const tableHead = ['Stat', 'Value'];
    const tableData =  [
        ['cost :', card.manaCost],
        ['attack : ', card.attack],
        ['health : ', card.health],
    ]

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
                <Text style={styles.flavor}>{card.flavorText}</Text>
            </View>
            <View style={styles.item}>
                <ListItemComponent url={card.img}/>
            </View>

            <ScrollView>
                <Table borderStyle={{borderWidth: 5, borderColor: '#c8e1ff'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} textStyle={styles.text}/>
                </Table>
            </ScrollView>
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
        fontWeight: "bold",
        fontSize: 20,
    },
    flavor: {
        fontStyle: "italic",
    },
    titleView: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 0,
        backgroundColor: '#fff',
        borderRadius : 10,
        borderWidth: 10,
        borderColor: '#efefef',
        maxHeight:100
    },
    head: { height: 40, backgroundColor: '#f1f8ff', minWidth: '90%'},
    text: { margin: 6 }
});
