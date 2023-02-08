import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";


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
});
