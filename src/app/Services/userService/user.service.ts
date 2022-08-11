import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  constructor(private http:HttpService) { this.token = localStorage.getItem('token');}

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

  resetPass(data:any,token:any){
    console.log(data);

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+token
      })
    }
    return this.http.putService('https://localhost:44342/api/User/resetpassword',data,true,header)
  }
  getUserById(){
    console.log("Getting user details");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44342/api/User/getuserbyid',true,header)
  }
}
