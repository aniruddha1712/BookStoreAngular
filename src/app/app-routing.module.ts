import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { GetAllBooksComponent } from './Component/get-all-books/get-all-books.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NonUserComponent } from './Component/non-user/non-user.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  { path:'signup', component:SignupComponent},
  { path:'', redirectTo:"/home/books",pathMatch:"full"},
  { path:'login', component:LoginComponent},
  { path:'forgotpassword', component:ForgotpasswordComponent},

  { path: 'home',component:HomeComponent,
  children:[
    {path: 'books', component: GetAllBooksComponent},
    {path:'', redirectTo:'/home/books', pathMatch:'full' },
    {path:'nonuser',component: NonUserComponent},
    {path:'quickview/:bookId',component: QuickviewComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
