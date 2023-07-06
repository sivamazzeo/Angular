import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoolSessionStorage } from '@angular-cool/storage';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor(private session : CoolSessionStorage) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.session.getItem('role').toLocaleLowerCase() == 'new user') {
        alert('Sorry! First sign up in the application');
        return false; 
      } else {
        return true;
      }
      
  }
  
}
