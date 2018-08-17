import { Component } from '@angular/core';
import { SucugruneService } from './services/sucugrune.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objeto: any = {};
  title = 'app';
  constructor(private serviceContacto: SucugruneService) { }
  guardar() {
    if (this.objeto.length !== 0) {
      this.objeto.fecha = new Date();
      this.serviceContacto.addContacto(this.objeto).then((res) => {
        this.objeto = {};
        window.alert('¡Gracias por escribirnos! Tu mensaje ha sido enviado exitosamente y pronto un asesor se pondrá en contacto')
      }, err => {
        window.alert(err);
      });
    }
  }
}
