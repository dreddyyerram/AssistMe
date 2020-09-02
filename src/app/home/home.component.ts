import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errmessage: string;
  username : string;
  examobject: any;
  exams: any[];
  


  constructor(private authService: FirebaseService, private router: Router) {
    this.username=this.authService.getUsername();
    //authService.getexams();
    this.examobject=authService.examsRef;
    this.examobject.valueChanges().subscribe((exams) => { 
      
      this.exams = exams });
    
    
    
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    
  }

}
