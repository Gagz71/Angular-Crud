import {CommentModel} from "./comment.model";


export class Serie{

	//attributs
	private _id: number ;
	private _name: string;
	private _firstSeasonReleasedDate: Date;
	private _seasons_nb: number;
	private _episodes_nb: number;
	private _shortDescription: string;
	private _longDescription: string;
	private _criticism: string;
	private _urlPicture: string;
	private _comments: Array<CommentModel>;

	private static _serieLength = 1;

	//constructor
	constructor(name: string, firstSeasonReleasedDate: Date, seasons_nb: number, episodes_nb: number, shortDescription: string, longDescription: string,criticism: string, urlPicture: string ) {

		this._id = Serie._serieLength;
		this._name = name;
		this._firstSeasonReleasedDate = firstSeasonReleasedDate;
		this._seasons_nb = seasons_nb;
		this._episodes_nb = episodes_nb;
		this._shortDescription = shortDescription;
		this._longDescription = longDescription;
		this._criticism = criticism;
		this._urlPicture = urlPicture;
		this._comments = new Array<CommentModel>();

		Serie._serieLength++;
	}

//Getters-Setters
	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get firstSeasonReleasedDate(): Date {
		return this._firstSeasonReleasedDate;
	}

	set firstSeasonReleasedDate(value: Date) {
		this._firstSeasonReleasedDate = value;
	}

	get seasons_nb(): number {
		return this._seasons_nb;
	}

	set seasons_nb(value: number) {
		this._seasons_nb = value;
	}


	get episodes_nb(): number {
		return this._episodes_nb;
	}

	set episodes_nb(value: number) {
		this._episodes_nb = value;
	}

	get shortDescription(): string {
		return this._shortDescription;
	}

	set shortDescription(value: string) {
		this._shortDescription = value;
	}


	get longDescription(): string {
		return this._longDescription;
	}

	set longDescription(value: string) {
		this._longDescription = value;
	}

	get criticism(): string {
		return this._criticism;
	}

	set criticism(value: string) {
		this._criticism = value;
	}

	get urlPicture(): string {
		return this._urlPicture;
	}

	set urlPicture(value: string) {
		this._urlPicture = value;
	}

	get comments(): Array<CommentModel> {
		return this._comments;
	}

	set comments(value: Array<CommentModel>) {
		this._comments = value;
	}


	static get serieLength(): number {
		return this._serieLength;
	}

	static set serieLength(value: number) {
		this._serieLength = value;
	}

}
