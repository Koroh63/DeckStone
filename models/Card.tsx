import {isValidNumber} from "react-native-gesture-handler/lib/typescript/web_hammer/utils";
import {CardSet} from "./CardSet";
import {Type} from "./Type";
import {Classe} from "./Classe";

export class Card {

    constructor(id: number,name :string,set : CardSet,type : Type,clas : Classe,rarity : string,cost : number,attack : number, health : number, desc : string,flavor : string,artist : string,collectible : boolean,elite : boolean,race : string, img : string, imgGold : string, cropImg :string) {
        this._id=id
        this._name=name
        this._set=set
        this._type=type
        this._class=clas
        this._rarity=rarity
        this._cost=cost
        this._attack = attack
        this._health = health
        this._desc = desc
        this._flavor = flavor
        this._artist = artist
        this._collectible = collectible
        this._img = img
        this._imgGold = imgGold
        this._cropImg = cropImg

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


    private _set : CardSet;
        get set(): CardSet{
            return this._set
        }

        set set(value : CardSet){
            this._set = value
        }

    private _type : Type;
        get type():Type{
            return this._type
        }
        set type(value : Type){
            this._type=value
        }

    private _class : Classe;

    get class():Classe{
        return this._class
    }
    set class(value : Classe){
        this._class=value
    }
    private _rarity : string

    get rarity(): string {
        return this._rarity;
    }

    set rarity(value: string) {
        this._rarity = value ;
    }
    private _cost : number

        get cost(): number {
            return this._cost;
        }
        set cost(value: number) {
            this._cost = value ;
        }

    private _attack : number
        get attack(): number {
            return this._attack;
        }
        set attack(value: number) {
            this._attack = value ;
        }
    private _health : number
        get health(): number {
            return this._health;
        }
        set health(value: number) {
            this._health = value ;
        }
    private _desc : string
        get desc(): string {
            return this._desc;
        }
        set desc(value: string) {
            this._desc = value ;
        }

    private _flavor : string

    get flavor(): string {
        return this._flavor;
    }
    set flavor(value: string) {
        this._flavor = value ;
    }

    private _artist : string
    get artist(): string {
        return this._artist;
    }
    set artist(value: string) {
        this._artist = value ;
    }
    private _collectible : boolean
    get collectible(): boolean {
        return this._collectible;
    }
    set collectible(value: boolean ){
        this._collectible = value;
    }

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
    private _cropImg : string

    get cropImg(): string {
        return this._cropImg;
    }
    set cropImg(value: string) {
        this._cropImg = value;
    }
}