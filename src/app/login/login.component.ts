import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGService } from '../modules/core/auth.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objeto: any = {};
  constructor( private srvLogin: AuthService, private router: Router, public srvAuth: AuthGService) { }

  ngOnInit() {
  }
  ingresar () {
    this.srvLogin.iniciarSesion(this.objeto.user, this.objeto.password).then( usuario => {
      if (usuario){
        let user = {
          email: usuario.email,
          displayName: usuario.displayName,
          logeado: true,
        }
        localStorage.setItem('usuarioLogeado', JSON.stringify(usuario));
        this.router.navigate(['/']);
      }
    }, err => {
      swal('Ocurrio un problema', err, 'error');
    })

  }
  
  ingresarGoogle () {
    this.srvAuth.googleLogin().then( res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
  }
}
