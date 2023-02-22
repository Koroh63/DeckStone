
class ApiDataManager{


    public async  getCards() : Promise<String[]> {


        const CardPromise = await fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards')

        const CardListJson = await CardPromise.json();
        const CardList: String[] = Array.of(CardListJson);
        return CardList;
    }
}
