import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AuthGService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  declarations: []
})
export class CoreModule { }
