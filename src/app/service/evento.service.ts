import { Injectable } from '@angular/core';
import { Evento } from './../class/evento';



@Injectable()
export class EventoService {

  constructor() { }

  evento: Evento= {
    titulo: 'titulo',
    descripcion: 'desp',
    fecha: new Date,
    path_img: 'sdhkshd',
    url_img: ''
  };
  getEventosList( ): String {

    return 'ok';
  }

}
