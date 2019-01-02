import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;

  constructor( private afsAuth: AngularFireAuth) {
    this.user = afsAuth.authState;
    this.afsAuth.auth.createUserWithEmailAndPassword('gerardo_torres_wilson@hotmail.com','123456').then(res => {
      console.log(res)
    })
  }
  iniciarSesion ( email: any, password: any) {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.EmailAuthProvider();
      this.afsAuth.auth
      .signInWithEmailAndPassword(email, password).then( res => {
        resolve(res.user);
      }, err => {
        reject(err.message);
      })
    });
  }
  cerrarSesion () {
    return this.afsAuth.auth.signOut();
  }
}
