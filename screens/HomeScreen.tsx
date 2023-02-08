
import { StyleSheet, Text, View, Button, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation' 
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
    return (
        // <View>
            //<TouchableNativeFeedback onPress={() => navigation.navigate("ListScreen")}>
            //<Text>Click me !</Text>
            //</TouchableNativeFeedback>
            <View style={styles.container}>
                <View style={styles.centered}>
                    <Text style={styles.title}>Mes super Nounours !</Text>
                </View>
                <Text>Mon super texte ...</Text>
                {/* <MyCustomComponent /> */}
                <View style={styles.MidArea}>
                    <Text style={styles.textStyle}>Nous sommes actuellement dans l'écran d'accueil !</Text>
                </View>
            </View>
        //</View>
    )
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "darksalmon",
        alignItems: "center"
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    },
    MidArea: {
        justifyContent: "center",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 50,
        margin: 40,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 20,
    }
});
