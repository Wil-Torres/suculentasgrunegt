import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { ServicioModalService } from './servicio-modal.service';
import { SucugruneService } from '../../services/sucugrune.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;
  objeto: any = {};
  oculto: string;

  constructor(public srvModal: ServicioModalService, public srvMant: SucugruneService) { }

  ngOnInit() {
    this.objeto = this.srvModal.objeto;
  }

  subirImagen () {
  }
  cerrarModal () {
    this.imagenSubir = null;
    this.imagenTemp = null;
    this.srvModal.ocultarModal();
  }
  actualizarGaleria () {
    this.srvMant.putGaleria(this.srvModal.objeto).then(actualizado => {
      swal('Actualización', 'Se actualizo la galeria fotografica', 'success');
      this.srvModal.notificacion.emit( this.srvModal.objeto );
      this.cerrarModal();
    })
  } 

}
