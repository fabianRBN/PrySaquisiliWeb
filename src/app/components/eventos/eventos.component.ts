import { Component, OnInit } from '@angular/core';
import {Evento} from './../../class/evento';



@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  evento: Evento = {
    titulo: 'titulo',
    descripcion: 'desp',
    fecha: new Date,
    path_img: 'sdhkshd',
    url_img: ''
  };
  palabra: String;
  constructor( ) {
    // this.palabra = this.eventoService.getEventosList();
   }

  ngOnInit() {
  }
  nuevoElemeto() {
    console.log(this.palabra);
    console.log('kjahsdak');
  }

}
