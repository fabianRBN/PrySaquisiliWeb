import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import {EventosComponent } from './components/eventos/eventos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RouterOutlet } from '@angular/router';
const routes: Routes = [
  { path: 'eventos', component: EventosComponent },
  { path: 'noticias', component: NoticiasComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule, RouterOutlet ]
})

export class AppRoutingModule {
   routes: any;
}

