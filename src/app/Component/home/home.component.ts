import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName:any='';
  constructor() { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('fullName');
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
  }
}
