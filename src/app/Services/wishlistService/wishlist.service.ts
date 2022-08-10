import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token:any;
  
  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token');
  }

  addToWishlist(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService(`https://localhost:44342/Wishlist/addtowishlist/${reqData.BookId}`, reqData, true, header);
  }
}
