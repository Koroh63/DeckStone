
import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '../navigation/StackNavigation' 
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCards } from "../redux/actions/actionSelection"
import StorageHeart from '../service/AsyncStorage';
import { setFavList } from '../redux/actions/action_setFavList';
import { setList } from '../redux/actions/action_setFavs';
import { Card } from '../models/Card';
//import { setList } from '../redux/actions/action_setList';







// @ts-ignore //
export default function HomeScreen({navigation}) {


    const dispatch = useDispatch();

    useEffect(() => {
        console.log("USEEFFECT")
        const loadFavCards = async () => {
            //@ts-ignore
            //await dispatch(getAllCards());
            const list = await StorageHeart.getItem("favoriteList")
            console.log("async favs : ",list)
            //@ts-ignore
            dispatch(setList(list))
            
        };
        loadFavCards();
    }, [dispatch]);
    useEffect(() => {
        console.log("USEEFFECT")
        const loadCards = async () => {
            //@ts-ignore
            await dispatch(getAllCards());
        };
        loadCards();
    }, [dispatch]);





    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>DeckStone</Text>
            </View>
            <Text style={styles.txt}>Votre gestionnaire de cartes Hearthstone </Text>
            {/* <MyCustomComponent /> */}
            <View style={styles.MidArea}>
                <Image source={require("../assets/logo.png")} style={styles.ige} resizeMode='cover' ></Image>
            </View>
        
            <View style={styles.butContain}>
                
                <TouchableNativeFeedback onPress={() => navigation.navigate("ListScreen")}>
                    <Text style={styles.ButtonStyle}>List</Text>
                </TouchableNativeFeedback>
                
                <TouchableNativeFeedback onPress={() => navigation.navigate("ListFav")}>
                    <Text style={styles.ButtonStyle}>Favoris</Text>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ac9585",
        alignItems: "center"
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 56,
        fontWeight: 'bold',
        
    },
    MidArea: {
        justifyContent: "center", 
        
    },
    txt: {
        fontSize: 20,
    },
    butContain: {
        flexDirection: 'row'

    },
    ige:{
        maxWidth: "110%",
        maxHeight: 400,
    },

    ButtonStyle :{
        backgroundColor: "#2E8AE6",
        borderRadius: 15,
        padding: 20,
        color: "white",
        fontSize : 36,
        width: "45%",
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },

});
