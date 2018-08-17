import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface objeto {
  nombre: string;
  correo: string;
  fecha: Date;
}

@Injectable({
  providedIn: 'root'
})
export class SucugruneService {

  objCollection: AngularFirestoreCollection<objeto>;
  contactos: Observable<objeto[]>
  constructor(private afs: AngularFirestore) { }
  getContactos() {
    this.objCollection = this.afs.collection('contactos');
    this.contactos = this.objCollection.valueChanges();
    return this.contactos;
  }
  addContacto(obj) {
    return this.afs.collection('contactos').doc(obj.nombre).set({
      nombre: obj.nombre,
      correo: obj.correo,
      mensaje: obj.mensaje,
      fecha: obj.fecha
    });
  }
}
