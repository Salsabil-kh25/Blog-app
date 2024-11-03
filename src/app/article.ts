export class Article {
    constructor(
        private _titre: string,
        private _image: string,
        private _datepub: Date,
        private _score: number,
        private _description: string
    ) {}

    public get titre(): string {
        return this._titre;
    }
    public set titre(value: string) {
        this._titre = value;
    }

    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value; 
    }

    public get score(): number {
        return this._score;
    }
    public set score(value: number) {
        this._score = value; 
    }

    public get datepub(): Date {
        return this._datepub; 
    }
    public set datepub(value: Date) {
        this._datepub = value; 
    }
}
