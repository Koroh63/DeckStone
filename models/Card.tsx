
export class Card {

    constructor(id: string,name :string,health : string, attack : string,  manaCost : string, rarityId : string, flavorText : string, classId : string, multiClassIds : any, img : string, imgGold : string, cropImage : string, artistName : string, fav : boolean){
        this.id=id
        this.name=name
        //this._set=set
        // this._type=type
        // this._class=clas
        // this._rarity=rarity
        this.manaCost=manaCost
        this.attack = attack
        this.health = health
        this.rarityId = rarityId
        // this._desc = desc
        this.flavorText = flavorText
        
        this.classId = classId
        this.multiClassIds = multiClassIds
        this.artistName = artistName
        // this._collectible = collectible
        this.img = img
        this.imgGold = imgGold
        this.cropImage = cropImage
        this.fav = fav

    }

    // ID //
    public id: string;

    // NAME //
    public name: string
        

    //     set set(value : CardSet){
    //         this._set = value
    //     }

    // private _type : Type;
    //     get type():Type{
    //         return this._type
    //     }
    //     set type(value : Type){
    //         this._type=value
    //     }

    // private _class : Classe;

    // get class():Classe{
    //     return this._class
    // }
    // set class(value : Classe){
    //     this._class=value
    // }
    // private _rarity : string

    // get rarity(): string {
    //     return this._rarity;
    // }

    // set rarity(value: string) {
    //     this._rarity = value ;
    // }

    public manaCost : string;
    
    
    

    public attack : string;
    public health : string;

    // private _desc : string
    //     get desc(): string {
    //         return this._desc;
    //     }
    //     set desc(value: string) {
    //         this._desc = value ;
    //     }
    public classId : string;

    public flavorText : string

    public rarityId : string

    
    public multiClassIds : any;


    public artistName : string;
    // private _collectible : boolean
    // get collectible(): boolean {
    //     return this._collectible;
    // }
    // set collectible(value: boolean ){
    //     this._collectible = value;
    // }

    public img : string;
    public imgGold : string;
    
        public cropImage : string;
        //FAV//
        public fav : boolean;
    
}