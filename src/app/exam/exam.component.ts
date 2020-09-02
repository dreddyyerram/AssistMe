import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service'
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  exam_id : string;
  errmessage : string;
  constructor(private authService: FirebaseService, private router: Router,private route: ActivatedRoute) { 

  authService.verifypasscode("jeemoc2","qwertyiop").then((res) => {
    if (res.code==="success"){
      console.log(res.message);
     

    }
    else{
      this.errmessage=res.message
      
    }

  });
  }

  ngOnInit(): void {
    this.exam_id = this.route.snapshot.paramMap.get('id');

  }
  

}
