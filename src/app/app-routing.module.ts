import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  { path:'signup', component:SignupComponent},
  { path:'', redirectTo:"/login",pathMatch:"full"},
  { path:'login', component:LoginComponent},
  { path:'forgotpassword', component:ForgotpasswordComponent},

  { path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
