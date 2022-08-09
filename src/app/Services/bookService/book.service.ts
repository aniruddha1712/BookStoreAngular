import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;
  constructor(private http:HttpService) { this.token=localStorage.getItem('token') }

  getAllBooks(){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.getService('https://localhost:44342/Book/getallbooks',false,header)
  }
  getBookById(bookId:any){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.getService(`https://localhost:44342/Book/getbookbyId/${bookId}`,false,header)
  }
}
