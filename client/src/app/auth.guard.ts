import { Injectable }from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable() 
  export class AuthGuard implements CanActivate {

    redirectUrl;

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(
        router: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if(this.authService.loggedIn()){
            return true;
        } else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
        


    }
 
      
  }