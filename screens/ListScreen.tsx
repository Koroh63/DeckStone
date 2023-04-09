
import { StyleSheet,View,TouchableHighlight, TextInput} from 'react-native';
import React, { useState} from "react";
import { FlatList } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import { Card } from '../models/Card';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import {CardProps} from "../props/favProps";
import { setFavList } from "../redux/actions/action_setFavList";

//* Components
import { ListItemComponent } from '../components/ListItemComponent';

//@ts-ignore
export default function ListScreen({navigation}){
    //@ts-ignore
    var nList = useSelector(state => state.appReducer.cards);

    //* Search : 
    const [searchValue, setSearchValue] = useState('');

    //@ts-ignore
    const filteredList = nList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));

    const dispatch = useDispatch()
    const HandleAddFav = (props : CardProps) => {
        dispatch(setFavList(props));
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.textInput}
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder="Rechercher une carte..."
            />

            <FlatList 
                numColumns={2}
                data={filteredList} 
                renderItem={({item}) =>
                    <View>
                        <TouchableHighlight testID="button" style={item.fav?styles.favoriteButtonFav:styles.favoriteButtonNonFav} 
                        onPress={() => HandleAddFav({route: { card: item, bool: false }} as CardProps)} >
                            <FontAwesome name="heart-o" size={50} color="#fff" />
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.imageItem} onPress={() => navigation.navigate("DetailCard", {card :item, other : 'anything'})}>
                            <ListItemComponent url={item.img}/>
                        </TouchableHighlight>
                    </View>
                } 
                keyExtractor={(item: Card) => item.id}
            />
        </View>

        
    );
}


const styles = StyleSheet.create({
    imageItem:{
        zIndex : 0
    },
    container: {
        flex: 1,
        backgroundColor: '#ac9585',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    textInput: {
        padding: 15,
        margin: 5,
        width:200,
        backgroundColor: '#ffffff',
        borderRadius : 15,
        shadowColor: 'grey',
        textAlign:'center'
    },
    favoriteButtonNonFav: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
        zIndex : 1,
    },
    favoriteButtonFav: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
        zIndex : 1,
    }
});

