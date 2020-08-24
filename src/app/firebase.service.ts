import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          
        }
        else {
          this.userDetails = null;
        }
      }
    );
    
  }
  
  login(email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => { 
        
        this.userDetails=value.user;
        return { message:this.userDetails, code : 'success' };
            }).catch(err => { 
                return { message : err.message , code:'error'};});
              
    
    
  }

  logout() {
      this.firebaseAuth.signOut();
      this.userDetails=null;
      
  }

  isAuthenticated(){
    if (this.userDetails == null ) {
      return false; }
    else {
      return true;
    }

  }

  getUsername() {
      if (this.userDetails != null ) {
        var name = this.userDetails.email.split("@");
        if(name[0]!=""){
          return name[0];
        }
        else{
        return this.userDetails.email; }
      }
        else{
          return null;
        }
  }

  
   
  
    
}
