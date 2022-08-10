import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlist:any;
  defaultImage:any="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
  constructor(private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist(){
    this.wishlistService.getWishlist().subscribe((response: any) => {
      console.log("Got All wishlist Books", response.data);
      this.wishlist = response.data;
    });
  }
  removeFromWishlist(wishistId:any){
    this.wishlistService.removeFromWishlist(wishistId).subscribe((response: any) => {
      console.log("Removed",response.data);
      this.getWishlist();
    });
  }
}
