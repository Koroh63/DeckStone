import { setCardsList } from "./action_setCardsList";



//! classe pour tester
export class Card {
  cardId : String
  name : String
  manaCost : number
  attack : number
  health : number
  desc : String

  // constructor() {
  //   this.cardId = "cardId";
  //   this.name = "name";
  //   this.manaCost = 0;
  //   this.attack = 0;
  //   this.health = 0;
  //   this.desc = "desc";
  // }

  constructor(cardId : String, name : String, manaCost : number, attack : number, health : number, desc : String){
    this.cardId = cardId;
    this.name = name;
    this.manaCost = manaCost;
    this.attack = attack;
    this.health = health;
    this.desc = desc;
  }


}


//Define your action creators that will be responsible for asynchronous operations
export const getAllCards = () => {
  //In order to use await your callback must be asynchronous using async keyword.

  //@ts-ignore
  return async dispatch => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const CardsPromise = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards');
      
      //Then use the json method to get json data from api/
      const CardsListJson = await CardsPromise.json();
      
      //@ts-ignore
      const CardsList: Card[] = CardsListJson.map(elt => new Card(elt["cardId"], elt["name"], elt["manaCost"], elt["attack"], elt["health"],elt["desc"]));
      
      //call the action 
      dispatch(setCardsList(CardsList));
    } catch (error) {
      console.log('Error---------', error);
      //You can dispatch to another action if you want to display an error message in the application
      //dispatch(fetchDataRejected(error))
    }
  }
}