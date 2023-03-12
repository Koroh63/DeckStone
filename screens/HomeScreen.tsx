import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation' 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';




//import Button from 'react-bootstrap/Button';

// @ts-ignore //(ta gueule pour l'erreur sur navigation)
export default function HomeScreen({navigation}) {
    //@ts-ignore
    const mode = useSelector(state => state.appReducer.mode);

    return (
        <View style={mode === 'light' ? styles.container_light : styles.container_dark}>
            <View style={styles.centered}>
                <Text style={styles.title}>Mes super Nounours !</Text>
            </View>
            <Text>Mon super texte ...</Text>
            {/* <MyCustomComponent /> */}
            <View style={styles.MidArea}>
                <Text style={styles.textStyle}>Nous sommes actuellement dans l'écran d'accueil !</Text>
            </View>
        
            <View style={styles.MidArea}>
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
        padding: 2,

        borderRadius: 15,
        borderWidth:5,
        borderColor:"#ababab"
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
    },
    container_light: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#3e3e42',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_light: {
        marginBottom: 20,
        color: '#000'
    },

});
