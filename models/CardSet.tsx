
export class CardSet {

    constructor(id: number,name : string, type : string ) {
        this._id = id
        this._name =name
        this._type = type

    }

    private _id : number

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

    private _type : string;
    get type(): string {
        return this._type;
    }
    set type(value: string) {
        this._type = value;
    }




}