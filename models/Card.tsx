class Card {

    constructor(name :string) {
        this._name=name
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    private _name : string;

}