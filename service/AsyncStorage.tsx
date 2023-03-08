import { Card } from "../models/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class AsyncStorageCard{

    static AddCardStorage(name : string, cards : Card[]){
        const storeFavoriteNounours = async (cards : Card[]) => {
            try {
                const jsonCard = JSON.stringify(cards)
                await AsyncStorage.setItem(name, jsonCard);
            } catch (e) {
                console.log("An error occurred", e);
            }
        }
    }

}