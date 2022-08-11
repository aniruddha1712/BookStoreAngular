import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/Services/addressService/address.service';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  fullName: any;
  email:any;
  password="Anni1234";
  mobileNumber: any;
  addressList: any;
  addressId = 0;
  addressObj:any;
  isAddEditAddress:boolean=false;

  address:any;
  city:any;
  state:any;
  addressType:any

  constructor(private userService:UserService,private addressService:AddressService) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.getAllAddress();
  }

  getUserDetails(){
    this.userService.getUserById().subscribe((response: any) => {
      console.log(response.data);
      this.fullName = response.data.fullName;
      this.email = response.data.emailId;
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
}