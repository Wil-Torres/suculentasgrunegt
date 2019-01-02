import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-nueva-galeria',
  templateUrl: './nueva-galeria.component.html',
  styles: []
})
export class NuevaGaleriaComponent implements OnInit {
  @ViewChild('imgTemp') imgTemp: ElementRef;
  path: string = "galeria";
  tituloVista: string = "CARGA DE GALERIA NUEVA";
  subtituloVista: string = "Al cargar la galeria asegurate de llenar toda la información";
  objeto: any = {};
  producto: any = {};
  task: AngularFireUploadTask;
  porcentaje: Observable<number>;
  snapshot: Observable<any>;
  productos: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  arrayDownload: any = [];

  imagenSubir: File;
  imagenTemp: string;

  constructor(
      private storage: AngularFireStorage, 
      private afs: AngularFirestore, 
      private router: Router,
      @Inject(DOCUMENT) private _document) { 
    let user = JSON.parse(localStorage.getItem('usuarioLogeado'));
    if ( !user ){
      this.router.navigate(['/login']);
    }
   }

  ngOnInit() {
    
  }
  guardarGaleria(event: FileList) {
    const file = this.objeto.img.target.files[0];
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
    const path = `imagenes/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'Mi portafolio' };
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata })
    this.task.then(res => {
      fileRef.getDownloadURL().toPromise().then(resp => {
        this.afs.collection('galeria').add(
          {
            path,
            codigo: this.objeto.codigo,
            nombre: this.objeto.nombre,
            descripcion: this.objeto.descripcion,
            precio: this.objeto.precio,
            descuento: this.objeto.descuento,
            alto: this.objeto.alto,
            ancho: this.objeto.ancho,
            url: resp
          }
        ).then((galeria: any) => {
          galeria.update({ id: galeria.id }).then(actualizado => {
            this.objeto = {};
            swal('Agregar Galeria', 'Se ha creado la galeria  ' + this.objeto.nombre, 'success').then(() => {
              this.router.navigate(['/lista-galeria']);
            });
            
          })
        })
      });
    });
    this.porcentaje = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(async () => {
        fileRef.getDownloadURL().toPromise().then(url => {
          this.arrayDownload.push(url);
          this.producto.imagenes = this.arrayDownload;
        });
        return this.downloadURL = fileRef.getDownloadURL()
      })
    );


  }

}
