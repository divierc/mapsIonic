import { Component, OnInit } from '@angular/core';
import { Marcador } from '../class/marcador';
import { Storage } from '@ionic/storage';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  ngOnInit() 
  {
    this.storage.get('marker').then((val) => {
      console.log(val);
      let data = JSON.parse(val);
      //console.log(data);
      debugger;
      for(let i=0; i<data.length; i++)
       {
       // this.marcadores.push(data[i]);

         //if(i==2){
          //   this.paths=this.marcadores;
          //   this.polygon=true;
          //   console.log(this.paths);
          //   debugger;
          // }
        //  if(this.marcadores.length==4)
        //   {
        //     this.latA = parseFloat(evento.coords.lat);
        //     this.lngA = parseFloat(evento.coords.lng);
        //   }
        //  if(this.marcadores.length==5)
        //  {
        //    this.latB = parseFloat(evento.coords.lat);
        //    this.lngB = parseFloat(evento.coords.lng);
        //    this.polyline = true;
         }
        });
      //val.add();
      //this.marcadores.push(val);
   //});
  }
  
  marcadores : Marcador[] = [];
  lat = 4.60972222222;  
  lng = -74.0816666667;
  paths: Array<any> = [];
  polygon = false;
  latA : number;
  latB : number;
  lngA : number;
  lngB : number;
  polyline = false;

  constructor(private storage: Storage){
    const nuevoMarcador = new Marcador(4.60972222222, -74.0816666667)
    this.marcadores.push(nuevoMarcador);

  }

  agregarMarcador(evento){
    console.log(evento);
    console.log(evento.coords.lat);
    console.log(evento.coords.lng);
    const nuevoMarcador = new Marcador(parseFloat(evento.coords.lat), parseFloat(evento.coords.lng));
    this.marcadores.push(nuevoMarcador);
    this.storage.set('marker', JSON.stringify(this.marcadores) );
    console.log(this.marcadores.length);
     if(this.marcadores.length>=3){
      this.paths=this.marcadores;
      this.polygon=true;
     if(this.marcadores.length==4)
      {
        this.latA = parseFloat(evento.coords.lat);
        this.lngA = parseFloat(evento.coords.lng);
      }
     if(this.marcadores.length==5)
     {
       this.latB = parseFloat(evento.coords.lat);
       this.lngB = parseFloat(evento.coords.lng);
       this.polyline = true;
     }
    }
  }

}
