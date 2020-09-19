import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule, ORIGIN } from '@angular/fire/functions';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';
import { Guard } from './guard.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ExamComponent } from './exam/exam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    AngularFireFunctionsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [
    FirebaseService,
    Guard,
    //{ provide: ORIGIN, useValue: 'https://assistme-39d97.web.app' }
    { provide: ORIGIN, useValue: 'http://localhost:5001' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
