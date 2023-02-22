
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";

export default async function Main() {
    const [count, setCount] = useState(0);
    const {getCards} = new StubLib();
    const list: Card[] = getCards();
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <Text>Maman, prend la caméra ! !</Text>
                <StatusBar style="auto"/>
                <Text>{count}</Text>
                <Text>{list.at(0)?.name}</Text>
                <Button onPress={() => setCount(count + 1)} title="+1"/>
            </View>
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
    }
});
