import {isValidNumber} from "react-native-gesture-handler/lib/typescript/web_hammer/utils";

export class Card {

    constructor(id: string,name :string,set : string,type : string,faction : string,rarity : string,cost : number,attack : number, health : number, desc : string,flavor : string,artist : string,collectible : boolean,elite : boolean,race : string, img : string, imgGold : string) {
        this._id=id
        this._name=name
        this._set=set
        this._type=type
        this._faction=faction
        this._rarity=rarity
        this._cost=cost
        this._attack = attack
        this._health = health
        this._desc = desc
        this._flavor = flavor
        this._artist = artist
        this._collectible = collectible
        this._elite = elite
        this._race = race
        this._img = img
        this._imgGold = imgGold

    }

    // ID //

    private _id : string;
        get id(): string {
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


    private _set : string;
        get set(): string{
            return this._set
        }

        set set(value : string){
            this._set = value
        }

    private _type : string;
        get type():string{
            return this._type
        }
        set type(value : string){
            this._type=value
        }

    private _faction : string;

    get faction():string{
        return this._faction
    }
    set faction(value : string){
        this._faction=value
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
    private _elite : boolean
    get elite(): boolean {
        return this._elite;
    }
    set elite(value: boolean) {
        this._elite = value ;
    }

    private _race : string
    get race(): string {
        return this._race;
    }
    set race(value: string) {
        this._race = value ;
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

}