import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { Guard } from './guard.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate : [ Guard ] ,
    component: HomeComponent,
    
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
