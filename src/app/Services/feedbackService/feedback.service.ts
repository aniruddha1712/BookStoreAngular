import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  token:any;

  constructor(private http:HttpService) { 
  this.token = localStorage.getItem('token');
  }

  addFeddback(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('https://localhost:44342/Feedback/addfeedback', reqData, true, header);
  }
  getAllFeedback(bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.http.getService(`https://localhost:44342/Feedback/getfeedback/${bookId}`,false,header)
  }
}
