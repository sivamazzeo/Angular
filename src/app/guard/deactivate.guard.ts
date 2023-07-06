import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoolSessionStorage } from '@angular-cool/storage';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<unknown> {
  constructor(private session : CoolSessionStorage){}

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.session.getItem('aunthenticated') == 'true') {
      alert('You are allowed now to exit');
      return true;
    } else {
      alert('Please make sure you are holding proper details');
      return false;
    }
  }
  
}
