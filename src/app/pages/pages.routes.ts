import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { GaleriaComponent } from "../components/mantenimiento/galeria/galeria.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { NosotrosComponent } from "./nosotros/nosotros.component";
import { ListaGaleriaComponent } from "../components/mantenimiento/lista-galeria/lista-galeria.component";
import { NuevaGaleriaComponent } from "../components/mantenimiento/nueva-galeria/nueva-galeria.component";
import { AuthGuard } from "../modules/core/auth.guard";

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'galeria', component: GaleriaComponent},
            {path: 'contactanos', component: ContactoComponent},
            {path: 'nosotros', component: NosotrosComponent},

            /* mantenimientos */
            {path: 'lista-galeria', component: ListaGaleriaComponent},
            {path: 'galeria-nueva', component: NuevaGaleriaComponent},
            {path: '', redirectTo: '/galeria', pathMatch: 'full'}
        ],
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );