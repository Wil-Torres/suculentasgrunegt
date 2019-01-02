import { Component, OnInit } from '@angular/core';
import { SucugruneService } from '../../services/sucugrune.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  objeto: any = {};
  title = 'app';

  constructor(private serviceContacto: SucugruneService) { }
  ocultar: string = 'ocultar'

  ngOnInit() {
  }
  guardar() {
    if (this.objeto.length !== 0) {
      this.objeto.fecha = new Date();
      this.serviceContacto.addContacto(this.objeto).then((res) => {
        this.objeto = {};
        swal('¡Gracias por escribirnos!', 'Tu mensaje ha sido enviado exitosamente y pronto un asesor se pondrá en contacto', 'success')
      }, err => {
        swal('Ocurrio un error', err, 'error')
      });
    }
  }

}
