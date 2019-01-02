import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
