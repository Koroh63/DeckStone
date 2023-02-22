import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";

import {setFavList } from '../redux/actions/action_setFavList';

//redux
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';


export const Cardslist = [
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
        title: "barman douteux",
    },
    {
        id: '10',
        title: "dernier élément",
    }
];



//@ts-ignore
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);



//TODO
// export const getFavList = () => {
//   //In order to use await your callback must be asynchronous using async keyword.
//     return async dispatch => {
//         //Then perform your asynchronous operations.
//         try {
//             //Have it first fetch data from our starwars url.
//             //const nounoursPromise = await fetch('https://iut-weather-api.azurewebsites.net/nounours');
//             //Then use the json method to get json data from api/
//             //const nounoursListJson = await nounoursPromise.json();
//             //const nounoursList: Nounours[] = nounoursListJson.map(elt => new Nounours(elt["name"], elt["age"], elt["nbPoils"], elt["image"]));
        
//             dispatch(setFavList(Array{id,title}));
//         } catch (error) {
//             console.log('Error---------', error);
//             //You can dispatch to another action if you want to display an error message in the application
//             //dispatch(fetchDataRejected(error))
//         }
//     }
// }







export default function Main(){
    const [count, setCount] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text>Maman, J4AI UNE LISTE DE FAVORIS ! !</Text>
            <StatusBar style="auto" />
            <Text>{count}</Text>
            <Button onPress={()=> setCount(count+1)} title="+1"/>
            <Button onPress={()=> setCount(count+2)} title="+2"/>
            <Button onPress={()=> setCount(count+10)} title="+10"/>

            <FlatList data={Cardslist}         
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor : "#cacaca",
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
