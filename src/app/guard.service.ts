import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {
    constructor(private router: Router, private authService: FirebaseService) { }
    canActivate() {
        if ( this.authService.isAuthenticated() ) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}