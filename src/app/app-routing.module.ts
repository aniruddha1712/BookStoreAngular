import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Component/cart/cart.component';
import { ForgotpasswordComponent } from './Component/forgotpassword/forgotpassword.component';
import { GetAllBooksComponent } from './Component/get-all-books/get-all-books.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NonUserComponent } from './Component/non-user/non-user.component';
import { OrderComponent } from './Component/order/order.component';
import { QuickviewComponent } from './Component/quickview/quickview.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { SignupComponent } from './Component/signup/signup.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  { path:'signup', component:SignupComponent},
  { path:'', redirectTo:"/home/books",pathMatch:"full"},
  { path:'login', component:LoginComponent},
  { path:'forgotpassword', component:ForgotpasswordComponent},
  { path:'resetpassword/:token', component:ResetPasswordComponent},

  { path: 'home',component:HomeComponent,
  children:[
    {path: 'books', component: GetAllBooksComponent},
    {path:'', redirectTo:'/home/books', pathMatch:'full' },
    {path:'nonuser',component: NonUserComponent},
    {path:'quickview/:bookId',component: QuickviewComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'orders',component:OrderComponent},
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
