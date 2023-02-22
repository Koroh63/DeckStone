
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation' 
import { Colors } from 'react-native/Libraries/NewAppScreen';

//import Button from 'react-bootstrap/Button';

// @ts-ignore //(ta gueule pour l'erreur sur navigation)
export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Mes super Nounours !</Text>
            </View>
            <Text>Mon super texte ...</Text>
            {/* <MyCustomComponent /> */}
            <View style={styles.MidArea}>
                <Text style={styles.textStyle}>Nous sommes actuellement dans l'écran d'accueil !</Text>
            </View>
        
            <View>
                <Text style={styles.t3}> Vous cherchez une entités ? </Text>
                <TouchableNativeFeedback onPress={() => navigation.navigate("ListScreen")}>
                    <Text style={styles.ButtonStyle}> Consulter la liste global !</Text>
                </TouchableNativeFeedback>
            </View>

            <View>
                <Text style={styles.t3}> Vous avez des entités favorites ? </Text>
                <TouchableNativeFeedback onPress={() => navigation.navigate("ListFav")}>
                    <Text style={styles.ButtonStyle}>Aller sur la page de favoris !</Text>
                </TouchableNativeFeedback>
            </View>
        </View>
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    MidArea: {
        justifyContent: "center",
        backgroundColor: "white",
        paddingTop: 50,
        paddingBottom: 50,
        margin: 40,
        borderRadius: 15,
    },
    textStyle: {
        textAlign: "center",
        fontSize: 20,
    },
    ButtonStyle :{
        backgroundColor: "#2E8AE6",
        borderRadius: 15,
        padding: 20,
        color: "white",
        fontSize : 20,
        fontWeight: 'bold',
    },
    t3 :{
        fontSize : 20,
        fontWeight: 'bold',
    }
});
