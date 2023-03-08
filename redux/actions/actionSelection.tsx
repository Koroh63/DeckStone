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
//     this.manaCost = manaCost;
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
        headers: {
          'X-RapidAPI-Key': '7f2463868fmsh25504614975f2f4p1328d1jsne514834ad08c',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
      };
      const CardsPromise = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', options);
      console.log("FETCH")
      console.log(CardsPromise)

      //Then use the json method to get json data from api/
      const CardsListJson = await CardsPromise.json();
      console.log(CardsListJson)

      //@ts-ignore
      const CardsList: Card[] = CardsListJson.map(elt => new Card(elt["cardId"], elt["name"], elt["cardSet"], elt["type"], elt["faction"], elt["rarity"], elt["cost"], elt["attack"], elt["health"],elt["text"], elt["flavor"], elt["artist"], elt["collectible"], elt["elite"], elt["race"], elt["img"], elt["imgGold"]));
      console.log("TOTO")
      console.log(CardsList)
      //call the action 
      dispatch(setCardsList(CardsList));
      
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}