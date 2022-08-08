import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm !: FormGroup;

  constructor(private fb:FormBuilder,private user :UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email:['',[Validators.required,Validators.email]]
    })
  }
  onSubmit(){
    if(this.forgotForm.valid){
      console.log("valid data", this.forgotForm.value);
      console.log("do api call");

      let data={
        email:this.forgotForm.value.email,
      }
      this.user.forgot(data).subscribe((res:any)=>{
        console.log(res);
      });
    }
    else{
      console.log("invalid data",this.forgotForm.value);
      console.log("no api call");
    }
    this.forgotForm.reset();
  }
}
