import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  showFiller = false;
  icon_menu = false;

  @ViewChild('sidenav') sidenav: MatSidenav;

  close(reason: string) {
    this.sidenav.close();
  }

  // tslint:disable-next-line:member-ordering

}
