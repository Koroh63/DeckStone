import { useDispatch } from "react-redux";
import { Card } from "../models/Card";
import { setFavList } from "../redux/actions/action_setFavList";
import { Image, TouchableHighlight, View } from "react-native";
import React, { useEffect } from "react";
import {CardProps} from "../props/favProps"
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet} from 'react-native';


export default function Item(props: CardProps){ // a mettre dans components et definir une props pour passer le param
    
    const {route} = props;
    const item: Card = route.card;
    const bool: boolean = route.bool;
    const dispatch = useDispatch()

    const HandleAddFav = (props : CardProps) => {
        dispatch(setFavList(props));
    }
    return(

        /* dispatch , */
    <View style={styles.item}>
            <TouchableHighlight testID="button" style={item.fav?styles.favoriteButtonFav:styles.favoriteButtonNonFav} onPress={() => HandleAddFav(props)} >
                <FontAwesome name="heart-o" size={50} color="#fff" />
            </TouchableHighlight>                
            <Image 
            source={{uri:item.img}}
            style={{flex:1, minHeight:250, minWidth:180}}/>
    </View>
    );
}
const styles = StyleSheet.create({
    item: {
        zIndex:0
    },
    favoriteButtonNonFav: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
        zIndex:1
    },
    favoriteButtonFav: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 10,
        zIndex:1
    },});