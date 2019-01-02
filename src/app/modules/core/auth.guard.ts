import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGService } from './auth.service';
import { AuthService } from '../../services/auth.service';
import { map, take, tap } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
   constructor(private auth: AuthGService, private srvAuth: AuthService, private router: Router){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return false
  }
}
