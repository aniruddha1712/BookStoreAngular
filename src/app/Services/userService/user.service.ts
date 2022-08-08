import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  signup(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService('https://localhost:44342/api/User/register',data,false,header)
  }
  login(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService('https://localhost:44342/api/User/login',data,false,header)
  }

  forgot(data:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.postService(`https://localhost:44342/api/User/forgotpassword/${data.email}`,data,false,header)
  }
}
