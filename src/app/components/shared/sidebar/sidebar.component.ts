import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: any = {};
  constructor() {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
   }

  ngOnInit() {
  }

}
