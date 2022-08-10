import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/orderService/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  orderlist:any;
  defaultImage:any="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe((response: any) => {
      console.log("Got All Orders", response.data);
      this.orderlist = response.data;
    });
  }
  
  getShortDate(date:any){
    return date.split('T')[0]
  }
}
