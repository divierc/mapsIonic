export class Marcador {
    public title: string;
    public description : string;
    public lat : number;
    public lng : number;

    constructor(lat : number, lng : number, title : string, description : string){
        this.lat = lat,
        this.lng = lng,
        this.title = title,
        this.description = description
    }
}
