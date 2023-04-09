import { setCardsList } from "./action_setCardsList";
import { Card } from "../../models/Card";

//Fonction chargé de l'appel à l'API
export const getAllCards = () => {
  
  //@ts-ignore
  return async dispatch => {  
    try {
      const options = {
        method: 'GET',     
        headers: {
          'content-length': '9508',
          'content-type': 'application/json; charset=utf-8',
          'etag': 'W/"74bb-d4gMlMNks7UGES3Jmn6wzUTXaLI"',
        }
       
      };
      //! Actualisation de l'API (19/04) :
      const CardsPromise = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=EUo8Snb09AfE3zQR4CoaB71gq1q3qvSmgL', options);

      //Then use the json method to get json data from api/
      const CardsListJson = await CardsPromise.json();
      
    

      
      //@ts-ignore
      const CardsList: Card[] = CardsListJson['cards'].map(elt => new Card(elt["id"] ? elt["id"] : 1,
                                                                          elt["name"] ? elt["name"] : "",
                                                                          elt["image"] ? elt["image"] : "",
                                                                          elt["imageGold"] ? elt["imageGold"] : "",
                                                                           )); //, elt["cardSet"], elt["type"], elt["faction"], elt["rarity"], elt["cost"], elt["attack"], elt["health"],elt["text"], elt["flavor"], elt["artist"], elt["collectible"], elt["elite"], elt["race"], elt["img"], elt["imgGold"]
      //elt["cardId"] == null ? elt["cardId"] : ""

      //call the action 
      dispatch(setCardsList(CardsList));
      
    } catch (error) {
      console.log('Error---------', error);
      
    }
  }
}