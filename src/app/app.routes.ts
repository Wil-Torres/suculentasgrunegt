import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';



// definir rutas
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: '**', component: NopagefoundComponent}
];

// exportamos el router para importar en otro servicio
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});