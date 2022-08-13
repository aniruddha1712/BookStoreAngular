import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/Services/addressService/address.service';
import { CartService } from 'src/app/Services/cartService/cart.service';
import { OrderService } from 'src/app/Services/orderService/order.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartlist:any;
  defaultImage:any="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
  step:number=0;

  fullName: any;
  mobileNumber: any;
  addressList: any;
  addressId = 0;
  addressObj:any;
  isAddEditAddress:boolean=false;

  address:any;
  city:any;
  state:any;
  addressType:any
  bookId:any;
  firstCartBook:any;

  constructor(private cartService:CartService, private userService:UserService,
    private addressService:AddressService, private orderService:OrderService,private router:Router) { }

  ngOnInit(): void {
    this.getCartlist();
    this.getUserDetails();
    this.getAllAddress();
  }

  getCartlist(){
    this.cartService.getCartItems().subscribe((response: any) => {
      console.log("Got All cart items", response.data);
      this.cartlist = response.data;
      this.firstCartBook = this.cartlist[0];
      this.bookId = this.firstCartBook.bookId;
      console.log(this.bookId);
    });
  }

  decreaseQty(cartId:any,bookInCart:any){
    this.cartService.updateCart(cartId,(bookInCart-1)).subscribe((response:any) =>{
      console.log("Cart Qty decreased");
      this.getCartlist();
    })
  }

  increaseQty(cartId:any,bookInCart:any){
    this.cartService.updateCart(cartId,(bookInCart+1)).subscribe((response:any) =>{
      console.log("Cart Qty increased");
      this.getCartlist();
    })
  }

  removeFromCart(cartId:any){
    this.cartService.removeFromCart(cartId).subscribe((response:any) =>{
      console.log("Removed from cart");
      this.getCartlist();
    })
  }

  stepUp(){
    this.step = 1;
    console.log("Step 1 "+this.step)
  }
  stepUp2(){
    this.step = 2;
    console.log("Step 2 "+this.step)
  }
  getUserDetails(){
    this.userService.getUserById().subscribe((response: any) => {
      console.log(response.data);
      this.fullName = response.data.fullName;
      this.mobileNumber = response.data.mobileNumber;
    });
  }
  addNewAddress(){
    this.isAddEditAddress = true;
    this.addressObj = [];
    this.address='';
    this.city='';
    this.state='';
    this.addressType='';
  }
 
  getAllAddress(){
    this.addressService.getAllAddress().subscribe((response:any) =>{
      console.log(response.data);
      this.addressList = response.data;
    })
  }

  editAddress(addressId:any){

  }

  deleteAddress(addressId:any){
    this.addressService.deleteAddress(addressId).subscribe((response: any) => {
      console.log("Item removed from cart successfully", response);
    })
  }

  updateAddress(addressId:any){
    if(this.address && this.city && this.state && this.addressType && addressId != ''){
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        typeId: Number(this.addressType),
        addressId: addressId
      }
      console.log(reqData)
      this.addressService.updateAddress(reqData).subscribe((response: any) => {
        console.log("Address updated successfully", response);
        this.getAllAddress();
      })
    }
  }


  addAddress(){
    if(this.address && this.city && this.state && this.addressType != ''){
      let reqData = {
        address: this.address,
        city: this.city,
        state: this.state,
        typeId: Number(this.addressType)
      }
      this.addressService.addAddress(reqData).subscribe((response: any) => {
        console.log("New Address Added successfully", response);
        this.getAllAddress();
      })
    }
  }
  addOrder(){
    if (this.cartlist?.length > 0){
      let data={
        BookId : this.bookId,
        AddressId : this.addressId,
      }
      this.orderService.placeOrder(data).subscribe((response:any) =>{
        console.log("Placed order",response);
        this.getCartlist();
        this.step=0;
        this.router.navigateByUrl('/home/order-success')
      })
    }
  }
}