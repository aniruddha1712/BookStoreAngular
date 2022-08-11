import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  token:any;
  constructor(private http:HttpService) { this.token=localStorage.getItem('token')}

  addAddress(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postService('https://localhost:44342/Address/addAddress', reqData, true, header);
  }
  updateAddress(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.putService('https://localhost:44342/Address/updateAddress', reqData, true, header);
  }
  deleteAddress(addressId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.deleteService(`https://localhost:44342/Address/deleteAddress/${addressId}`, addressId, true, header);
  }
  getAllAddress() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44342/Address/getalladdress', true, header);
  }
  getAddressById(addressId:any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService(`https://localhost:44342/Address/getalladdresss/${addressId}`, true, header);
  }

}
