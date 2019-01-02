import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthGService {
  user: Observable<User>;

  constructor(
    private afsAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    /*this.user = this.afsAuth.authState.pipe(
      map(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null);
        }
      })
    )*/
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afsAuth.auth.signInWithPopup(provider).then((credenciales) => {
      this.updateUserData(credenciales.user)
    })
  }
  updateUserData(user) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    userRef.valueChanges().subscribe(resp=> {
      if ( resp.email === user.email) {
        return resp
      }
    })
    
  }
}
