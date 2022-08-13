import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any;
  
  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token');
  }

  getOrders(){
    console.log("Getting wishlist");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44342/Order/getorders',true,header)
  }

  placeOrder(data:any){
    console.log("Placing order");
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('https://localhost:44342/Order/placeorder',data,true,header)
  }
}
