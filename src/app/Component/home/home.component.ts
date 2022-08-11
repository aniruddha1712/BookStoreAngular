import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName:any='';
  search:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName');
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
  }
  searchBook(event:any){
    this.search=event.target.value
    this.dataService.changeMessage(event.target.value)
  }
}
