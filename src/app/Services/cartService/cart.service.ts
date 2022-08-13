import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:any;
  
  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token');
  }

  addToCart(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('https://localhost:44342/Cart/addtocart', reqData, true, header);
  }

  getCartItems(){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44342/Cart/getcartitem', true, header);
  }
  updateCart(cartId:any,bookQty:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.putService(`https://localhost:44342/Cart/updatecart/${cartId}/${bookQty}`,cartId,true, header);
  }
  removeFromCart(cartId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteService(`https://localhost:44342/Cart/removefromcart/${cartId}`,cartId, true, header);
  }
}
