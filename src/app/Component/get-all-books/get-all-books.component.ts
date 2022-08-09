import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  bookList:any;
  sortBy:any="Sort by relevence";
  defaultImage:any="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";

  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.bookList = response.data;
    });
  }

  relevence(){  
    this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";
  }

  PriceLowToHigh(){
    this.bookList = this.bookList.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.bookList = this.bookList.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
     this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="Newest First";
  }
  quickView(bookId:any){
    this.router.navigateByUrl('/home/quickview/' + bookId);
  }
}
