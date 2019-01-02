import { Component, OnInit } from '@angular/core';
import { SucugruneService } from '../../../services/sucugrune.service';
import { ServicioModalService } from '../../modal-upload/servicio-modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-galeria',
  templateUrl: './lista-galeria.component.html',
  styles: []
})
export class ListaGaleriaComponent implements OnInit {
  objeto: any =[];

  constructor(private srvGaleria: SucugruneService, 
    private srvModal:ServicioModalService, private router: Router) {
      let user = JSON.parse(localStorage.getItem('usuarioLogeado'));
      if ( !user ){
        this.router.navigate(['/login']);
      }
    }

  ngOnInit() {
    this.srvGaleria.getGalerias().subscribe(galeria => {
      this.objeto = galeria;

    });
    this.srvModal.notificacion.subscribe((resp)=> this.srvGaleria.getGalerias());
  }
  borrar (objeto) {
    this.srvGaleria.deleteGaleria(objeto);
  }
  mostrarModal ( id: string ) {
    this.srvModal.mostrarModal(id);
  }
  agregarGaleria () {
    this.router.navigate(['/galeria-nueva']);

  }

}
