import { StyleSheet, Text, View, TouchableNativeFeedback, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCards } from "../redux/actions/actionSelection"
import StorageHeart from '../service/AsyncStorage';
import { setList } from '../redux/actions/action_setFavs';
import Navigation from '../navigation/Navigation';


// @ts-ignore //
export default function HomeScreen({navigation}) {
    const dispatch = useDispatch();

    //chargement des listes 
    useEffect(() => {

        const loadFavCards = async () => {
            //@ts-ignore
            const list = await StorageHeart.getItem("favoriteList")
            
            if(list!=null){
                //@ts-ignore
                dispatch(setList(list))
            }
            
        };
        loadFavCards();
    }, [dispatch]);
    useEffect(() => {
        
        const loadCards = async () => {
            //@ts-ignore
            await dispatch(getAllCards());
        };
        loadCards();
    }, [dispatch]);



    // affichage de la homePage
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
                
                <TouchableNativeFeedback onPress={() =>  navigation.navigate("ListScreen")}>
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
        backgroundColor: "#F5F5F5",
        borderRadius: 15,
        padding: 20,
        color: "black",
        fontSize : 36,
        width: "45%",
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
    },

});
