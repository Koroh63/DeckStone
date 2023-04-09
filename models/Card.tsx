
export class Card {

    constructor(id: string,name :string, img : string, imgGold : string,fav : boolean = true){
        this.id=id
        this.name=name
        this.img = img
        this.imgGold = imgGold
        this.fav = fav

    }

    // ID //
    public id;

    // NAME //
    public name;

    //IMG//
    public img;

    //IMGGOLD//
    public imgGold;

    //FAV//
    public fav;
}