import { Injectable, EventEmitter } from '@angular/core';
import { SucugruneService } from '../../services/sucugrune.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioModalService {
  public oculto: string = 'oculto';
  public notificacion = new EventEmitter<any>();
  public objeto: any = {};
  public obj: Observable<{}>;
  constructor(private srvMant: SucugruneService) {
  }
  ocultarModal() {
    this.oculto = 'oculto';
  }
  mostrarModal(id: string) {
    this.obj = this.srvMant.getGaleria(id);
    this.srvMant.getGaleria(id).subscribe(galeria => {
      this.objeto = galeria;
      this.oculto = '';
    });
  }
  
}
