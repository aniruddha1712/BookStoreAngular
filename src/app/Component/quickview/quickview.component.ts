import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { FeedbackService } from 'src/app/Services/feedbackService/feedback.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  bookId:any;
  book:any;
  ratingPoint:any=0;
  comment:any;
  feedbackList:any;
  defaultImage:any="https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif";
  addedToCart:any=false;

  constructor(private activeRoute:ActivatedRoute,private bookService:BookService,private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.bookId = this.activeRoute.snapshot.paramMap.get('bookId');
    this.getBookById(this.bookId);
    this.getAllFeedback(this.bookId);
  }

  getBookById(bookId:any){
    this.bookService.getBookById(bookId).subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.book = response.data;
    });
  }

  addFeedback(){
    let reqData = {
      Rating: this.ratingPoint,
      Comment: this.comment,
      BookId: this.book.bookId
    }
    this.feedbackService.addFeddback(reqData).subscribe((response: any) => {
      console.log("Feedback submitted successful", response);
      this.getAllFeedback(this.bookId);
    });
    this.comment='';
    this.ratingPoint=0;
  }

  getAllFeedback(bookId: any){
    this.feedbackService.getAllFeedback(bookId).subscribe((response: any) => {
      console.log("GetAll feedback successful", response);
      this.feedbackList = response.data;
    });
  }
  getShortName(name:any){
    return name.split(' ').map((n:any) => n[0]).join('');
  }
  
  addToCart(){
    this.addedToCart=true;
  }

  notifyMe(){

  }

  addToWishlist(){

  }

}
