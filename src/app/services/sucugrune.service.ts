import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
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
  galeria: Observable<objeto[]>
  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }
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
  getGalerias () {
    this.objCollection = this.afs.collection('galeria');
    this.galeria = this.objCollection.valueChanges();
    return this.galeria;
  }
  getGaleria (id: string) {
    this.objCollection = this.afs.collection('galeria')
    return this.objCollection.doc(id).valueChanges();

  }
  postGaleria () {}
  putGaleria (objeto) {
    return this.afs.collection('galeria').doc(objeto.id).update(objeto);
  }
  deleteGaleria (objeto) {
    this.afs.collection('galeria').doc(objeto.id).delete().then(res => {
      const fileRef = this.storage.ref(objeto.path);
      fileRef.delete().subscribe(() => {
        console.log('REGISTRO ELIMINADO EXITOSAMENTE')
      });
    }, err => {
      console.error(err);
    });

  }
}
