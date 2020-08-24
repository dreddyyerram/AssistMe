import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: FirebaseService, private router: Router) { 

  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    
    this.router.navigate(['/login']);

  }

}
