
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { FlatList } from 'react-native-gesture-handler';


export const DATA = [
    {
        id: '1',
        title: "premier élément",
    },
    {
        id: '2',
        title: "second élément",
    },
    {
        id: '3',
        title: "élément",
    },
    {
        id: '4',
        title: "Rick",
    },
    {
        id: '5',
        title: "Corentin",
    },
    {
        id: '10',
        title: "dernier élément",
    },
];

//@ts-ignore
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function Main(){
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text>Maman, prend la caméra ! !</Text>
                <StatusBar style="auto" />
                <Text>{count}</Text>
                <Button onPress={()=> setCount(count+1)} title="+1"/>
            </View>
            <FlatList data={DATA}         
            renderItem={({item}) => <Item title={item.title} />}
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
