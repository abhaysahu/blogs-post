import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Injectable()
  export class NotAuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate() {
        if(this.authService.loggedIn()){
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
        


    }
 
      
  }