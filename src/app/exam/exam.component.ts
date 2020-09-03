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
  passcode : string;
  questions : any;
  constructor(private authService: FirebaseService, private router: Router,private route: ActivatedRoute) { 

  
  
  }

  ngOnInit(): void {
    this.exam_id = this.route.snapshot.paramMap.get('id');

  }
  
  submit(): void {
    this.authService.verifypasscode(this.exam_id,this.passcode).then((res) => {
      if (res.code==="success"){
        this.questions=res.message;

        console.log(res.message);
       
  
      }
      else{
        this.errmessage=res.message
        
      }
  
    });

  }

}
