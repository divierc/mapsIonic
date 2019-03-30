import { Component } from '@angular/core';
import { Marcador } from '../class/marcador';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  marcadores : Marcador[] = [];
  lat = 4.60972222222;
  lng = -74.0816666667;

  constructor(){
    const nuevoMarcador = new Marcador(4.60972222222, -74.0816666667)
    this.marcadores.push(nuevoMarcador);

  }

  agregarMarcador(evento){
    console.log(evento);
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);
    const nuevoMarcador = new Marcador(evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);

  }

}
