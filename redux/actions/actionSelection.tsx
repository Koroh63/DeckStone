import { setCardsList } from "./action_setCardsList";

import { Card } from "../../models/Card";

//! se fichier devra possiblement changer de dossier !!!

//! classe pour tester
// export class Card {
//   cardId : String
//   name : String
//   manaCost : number
//   attack : number
//   health : number
//   desc : String

//   // constructor() {
//   //   this.cardId = "cardId";
//   //   this.name = "name";
//   //   this.manaCost = 0;
//   //   this.attack = 0;
//   //   this.health = 0;
//   //   this.desc = "desc";
//   // }

//   constructor(cardId : String, name : String, manaCost : number, attack : number, health : number, desc : String){
//     this.cardId = cardId;
//     this.name = name;
//     this.manaCost = manaCost;ADD_FAVORITE_DATA, FETCH_DATA,
//     this.attack = attack;
//     this.health = health;
//     this.desc = desc;
//   }


// }


//Define your action creators that will be responsible for asynchronous operations
export const getAllCards = () => {
  //In order to use await your callback must be asynchronous using async keyword.
  console.log("getallcard")
  //@ts-ignore
  return async dispatch => {  
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const options = {
        method: 'GET',
        // headers: {
        //   'content-length':'9505',
        //   'content-type':'application/json; charset=utf-8',
        //   'etag':'W/"74bb-QMT8DIj6saBS1wT4u5WWcEmZAdw"'
        // }ADD_FAVORITE_DATA, FETCH_DATA,

        //! Actualisation de l'API (16/03) :
        headers: {
          'content-length': '9508',
          'content-type': 'application/json; charset=utf-8',
          'etag': 'W/"74bb-d4gMlMNks7UGES3Jmn6wzUTXaLI"',
        }
        //'pageSize':'100'
      };
      //! Actualisation de l'API (16/03) :
      const CardsPromise = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=EUo8Snb09AfE3zQR4CoaB71gq1q3qvSmgL', options);
      //const CardsPromise = await fetch('https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=EURTWhjBC2SRb4Ez42BT1kx8R2NcJc07kL', options);
      //console.log("FETCH")
      //console.log(CardsPromise)

      //Then use the json method to get json data from api/
      const CardsListJson = await CardsPromise.json();
      
      //console.log(CardsListJson['cards']) 

      
      //@ts-ignore
      const CardsList: Card[] = CardsListJson['cards'].map(elt => new Card(elt["id"] ? elt["id"] : 1,
                                                                          elt["name"] ? elt["name"] : "",
                                                                          elt["image"] ? elt["image"] : "",
                                                                          elt["imageGold"] ? elt["imageGold"] : "",
                                                                           )); //, elt["cardSet"], elt["type"], elt["faction"], elt["rarity"], elt["cost"], elt["attack"], elt["health"],elt["text"], elt["flavor"], elt["artist"], elt["collectible"], elt["elite"], elt["race"], elt["img"], elt["imgGold"]
      //elt["cardId"] == null ? elt["cardId"] : ""
      
      //console.log("TOTO")
      
      //console.log(CardsList)
      //call the action 
      dispatch(setCardsList(CardsList));
      
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}