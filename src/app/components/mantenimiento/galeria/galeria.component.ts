import { Component, OnInit } from '@angular/core';
import { SucugruneService } from '../../../services/sucugrune.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  objeto: any[];

  constructor(private srvGaleria: SucugruneService) { }

  ngOnInit() {
    this.srvGaleria.getGalerias().subscribe(galeria => {
      this.objeto = galeria;

    });
  }

}
