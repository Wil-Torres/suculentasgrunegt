import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario: any = {};
  constructor(private signOut: AuthService, private router: Router) { 
    if (localStorage.getItem('usuarioLogeado')) {
      this.usuario = JSON.parse(localStorage.getItem('usuarioLogeado'));
      this.usuario.nombre = this.usuario.email;
    } else {
      this.usuario.length = 0;
    }
  }

  ngOnInit() {
  }
  cerrarSesion () {
    this.signOut.cerrarSesion().then(res => {
      localStorage.removeItem('usuarioLogeado');
      this.usuario = {}
      this.router.navigate(['/']);
      location.reload();
    }, err => {
      swal('Ocurrio un problema', err , 'error');
    })
  }
  login () {
    this.router.navigate(['/login']);
  }

}
