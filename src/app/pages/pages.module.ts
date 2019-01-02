import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../components/shared/shared.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from '../components/mantenimiento/galeria/galeria.component';
import { NuevaGaleriaComponent } from '../components/mantenimiento/nueva-galeria/nueva-galeria.component';
import { ListaGaleriaComponent } from '../components/mantenimiento/lista-galeria/lista-galeria.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';


@NgModule({
    declarations: [
        PagesComponent,
        ModalUploadComponent,
        NosotrosComponent,
        ContactoComponent,
        GaleriaComponent,
        NuevaGaleriaComponent,
        ListaGaleriaComponent,
        FileUploadComponent
    ],
    exports: [
        PagesComponent,
        NosotrosComponent,
        ContactoComponent,
        GaleriaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        PAGES_ROUTES,
    ]
        
})

export class PagesModule { }