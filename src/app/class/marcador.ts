export class Marcador {
    public title: string = 'Sin titulo';
    public description : string = 'Sin descripción'
    public lat : number = 4.60972222222;
    public lng : number = -74.0816666667;

    constructor(lat : number, lng : number){
        this.lat = lat,
        this.lng = lng
    }
}
