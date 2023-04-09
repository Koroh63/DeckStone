
export class Card {

    constructor(id: number,name :string,health : number, attack : number,  manaCost : number, rarityId : number, flavorText : string, classId : number, multiClassIds : any, img : string, imgGold : string, cropImage : string, artistName : string, fav : Boolean){//,set : CardSet,type : Type,clas : Classe,rarity : string,, desc : string,flavor : string,artist : string,collectible : boolean,elite : boolean,race : string,  cropImg :string) {
        this._id=id
        this._name=name
        //this._set=set
        // this._type=type
        // this._class=clas
        // this._rarity=rarity
        this._manaCost=manaCost
        this._attack = attack
        this._health = health
        this._rarityId = rarityId
        // this._desc = desc
        this._flavorText = flavorText
        
        this._classId = classId
        this._multiClassIds = multiClassIds
        this._artistName = artistName
        // this._collectible = collectible
        this._img = img
        this._imgGold = imgGold
        this._cropImage = cropImage
        this._fav = fav

    }

    // ID //
    private _id : number;
        get id(): number {
            return this._id
        }

    // NAME //
    private _name : string;
        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }

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

    private _manaCost: number;
    get manaCost(): number {
        return this._manaCost;
    }
    
    set manaCost(value: number) {
        this._manaCost = value;
    }
    

    private _attack : number;
        get attack(): number {
            return this._attack;
        }
        set attack(value: number) {
            this._attack = value;
        }
    private _health : number;
        get health(): number {
            return this._health;
        }
        set health(value: number) {
            this._health = value ;
        }

    // private _desc : string
    //     get desc(): string {
    //         return this._desc;
    //     }
    //     set desc(value: string) {
    //         this._desc = value ;
    //     }
    private _classId : number;

    get classId(): number {
        return this._classId;
    }
    set classId(value: number) {
        this._classId = value ;
    }

    private _flavorText : string;
    get flavorText(): string {
        return this._flavorText;
    }
    set flavor(value: string) {
        this._flavorText = value ;
    }

    private _rarityId : number;
    get rarityId(): number {
        return this._rarityId;
    }
    set rarityId(value: number) {
        this._rarityId = value ;
    }

    
    private _multiClassIds : string;
    get multiClassIds(): string {
        return this._multiClassIds;
    }
    set multiClassIds(value: string) {
        this._multiClassIds = value ;
    }


    private _artistName : string;
    get artistName(): string {
        return this._artistName;
    }
    set artistName(value: string) {
        this._artistName = value ;
    }
    // private _collectible : boolean
    // get collectible(): boolean {
    //     return this._collectible;
    // }
    // set collectible(value: boolean ){
    //     this._collectible = value;
    // }

    private _img : string

        get img(): string {
            return this._img;
        }
        set img(value: string) {
            this._img = value ;
        }
    private _imgGold : string

        get imgGold(): string {
            return this._imgGold;
        }
        set imgGold(value: string) {
            this._imgGold = value ;
        }
    
        private _cropImage : string;
    get cropImage(): string {
        return this._cropImage;
    }
    set cropImage(value: string) {
        this._cropImage = value;
    }
    //FAV//
    public _fav;
    get fav(): Boolean {
        return this._fav
    }
}